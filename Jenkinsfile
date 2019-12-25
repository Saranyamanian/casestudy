// ********************************* 
//      JENKINSFILE
// *********************************

if (build ==~ /(?i)(Y|YES|T|TRUE|ON|RUN)/) {
    node("docker-devops2") {
    def app;
    def api;
    def maven = docker.image('maven:3.5.2') 

        stage("INSTALL MAVEN") {
            maven.pull()
        }

        stage('CLONE REPOSITORY') {
            checkout https://github.com/Balamurugan92/CapsuleUpdated.git
        }

        stage ('BUILD APPLICATION') {  
                    maven.inside{
                    writeFile file: 'settings.xml', text: "<settings><mirrors><mirror><id>ctsMirror</id><mirrorOf>*</mirrorOf><name>CTS Mirror</name><url>https://github.com/Balamurugan92/CapsuleUpdated.git</url></mirror></mirrors><profiles><profile><id>cts-ope</id><activation><activeByDefault>true</activeByDefault></activation><repositories><repository><id>cts</id><url>http://cts/central</url><releases><enabled>true</enabled></releases><snapshots><enabled>true</enabled></snapshots></repository></repositories><pluginRepositories><pluginRepository><id>cts</id><url>http://cts/central</url><releases><enabled>true</enabled></releases><snapshots><enabled>true</enabled></snapshots></pluginRepository></pluginRepositories></profile></profiles></settings>"
                    sh 'mvn -B -s settings.xml -f ./Web/api clean install'
            } 
         }
         
        stage ('SONAR AUDIT') {
                maven.inside{
                writeFile file: 'settings.xml', text: "<settings><mirrors><mirror><id>ctsMirror</id><mirrorOf>*</mirrorOf><name>CTS Mirror</name><url>https://github.com/Balamurugan92/CapsuleUpdated.git</url></mirror></mirrors><profiles><profile><id>cts-ope</id><activation><activeByDefault>true</activeByDefault></activation><repositories><repository><id>cts</id><url>http://cts/central</url><releases><enabled>true</enabled></releases><snapshots><enabled>true</enabled></snapshots></repository></repositories><pluginRepositories><pluginRepository><id>cts</id><url>http://cts/central</url><releases><enabled>true</enabled></releases><snapshots><enabled>true</enabled></snapshots></pluginRepository></pluginRepositories></profile></profiles></settings>"
                sh 'mvn -B -s settings.xml -f ./Web/api  clean org.jacoco:jacoco-maven-plugin:prepare-agent install verify sonar:sonar -Dmaven.test.skip'
            }

        } 
         
        stage('GENERATE & PUSH API IMAGE') {
			withCredentials([[$class: 'UsernamePasswordMultiBinding', credentialsId: 'userID',usernameVariable: 'USERNAME', passwordVariable: 'PASSWORD']])
            {
                sh '''
                    export http_proxy_build=http://\${USERNAME}:\${PASSWORD}@host:port
                    #docker rmi --force $(docker images -q cts/iihtTestApp-api | uniq) 
                    #docker rmi --force $(docker images -q host:port/cts/iihtTestApp-api | uniq)
                    docker build -t cts/iihtTestApp-api -f Web/api/Dockerfile  --build-arg http_proxy=${http_proxy_build} --build-arg https_proxy=${http_proxy_build} .
                    docker tag cts/iihtTestApp-api host:port/cts/iihtTestApp-api:${BUILD_NUMBER}
                    docker push host:port/cts/iihtTestApp-api:${BUILD_NUMBER}
                 '''

            } 
         }

        stage('BUILD GENERATE& PUSH APP IMAGE') {
            withCredentials([[$class: 'UsernamePasswordMultiBinding', credentialsId: 'userID',usernameVariable: 'USERNAME', passwordVariable: 'PASSWORD']])
            {
                sh '''
                    export http_proxy_build=http://\${USERNAME}:\${PASSWORD}@host:port
                    #docker rmi --force $(docker images -q cts/iihtTestApp-app | uniq) 
                    #docker rmi --force $(docker images -q host:port/cts/iihtTestApp-app | uniq)
                    docker build -t cts/iihtTestApp-app -f Web_Angular/app/Dockerfile --build-arg http_proxy=${http_proxy_build} --build-arg https_proxy=${http_proxy_build} .
                    docker tag cts/iihtTestApp-app host:port/cts/iihtTestApp-app:${BUILD_NUMBER}
                    docker push host:port/cts/iihtTestApp-app:${BUILD_NUMBER}
                 '''

            }
        }
    } 
}