import React, { Component } from 'react';
import axios from 'axios';
import UpdateTask from './UpdateTask';
import {Link} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';


export class ProjectDetails extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
          
            lists:[]
        }
    }
    handleDeleteChange = (event) =>{
       
      
        alert("delete")
          let projectName =event.target.id;
          console.log(projectName)
           
    
              const urlUpdate = `http://localhost:8098/Delete/Project/${projectName}`;
              console.log(urlUpdate)
              axios.delete(urlUpdate).then(response => response.data)
              .then((data) => {
                  console.log(data)
                  this.setState({ 
                      lists:data
          
                  }
                  )
               })
          
      console.log(event.target.id);
      }
 
    handleUpdateChange = (event) =>{
      
       
        const projectID = event.target.id;
        console.log(projectID)
        const v = `http://localhost:8098/Project/${projectID}`
        console.log(v)
        axios.get(`http://localhost:8098/Project/${projectID}`)
            .then(response => response.data)
            .then((data) => {
             console.log(data)
             const formValues = {
                projectID:projectID,
                projectName: data.projectName,
                priority:data.priority,
                managerName: data.managerName,
                Start_Date:data.startDate,
                End_Date:data.endDate,
                }
                console.log(data)
                console.log(this.state.lists)
                console.log("-----------------")
                this.props.history.push({pathname:'/UpdateProject',
                state:{response:formValues}})
                })
        // this.props.history.push('/UpdateTask')
       
    }
    renderTableData() {
        console.log(this.state.lists)
        console.log(this.state.lists[0])
   return this.state.lists.map((list,index) => {
 
        const {projectID,projectName,priority,startDate,endDate,managerName} = list //destructuring
      
      return (

          
         <tr key={projectID}>
            <td>{projectName}</td>
            <td>{managerName}</td>
            <td>{priority}</td>
            <td>{startDate}</td>
            <td>{endDate}</td>
            <td><button type="button" id={projectID} class="btn btn-info" onClick= {this.handleUpdateChange}>Edit Project</button></td> 
            <td><button type="button"  id={projectName}  class="btn btn-danger" onClick={this.handleDeleteChange} >Delete</button></td>

         </tr>
         
      )
   })
}

componentDidMount()  {
  
   
    console.log("Inside component did mount")
{


axios.get(`http://localhost:8098/Details/Project`)
.then(response => response.data)
.then((data) => {
  console.log(data)
  this.setState({ 
      lists:data
  }
  )
  console.log(data)
  console.log(this.state.lists)
  console.log("-----------------")

})
}
}
    render() {
        return (
            <div>
                  <MuiThemeProvider>
                  <div>
                    <nav className="navbar navbar-primary bg">
                    <a id= "color_login" className="navbar-brand navLogin">List of Users</a>
                        <form className="form-inline">
                        <Link to = '/AddProject'> <button className="btn btn-success my-2 my-sm-0" type="submit">Add Project</button></Link>&nbsp;&nbsp;&nbsp;&nbsp;
                        <Link to = '/Home'>  <button className="btn btn-success my-2 my-sm-0" type="submit">Home</button></Link>
                        </form>
                    </nav>
                </div>
                 <div className="margin_project"> 
                <br/>
             
              <br/>
              <table id='students'>
                 <thead>
                     <tr>
                         <th>Project Name</th>
                         <th>Manager Name</th>
                         <th> Priority </th>
                         <th> Start date </th>
                         <th> End date   </th>
                         <th colspan="2" >Action</th>
                         </tr>
                     </thead>
                 <tbody>
                                       
                   {this.renderTableData()}
                 </tbody>
              </table>
           </div>
           </MuiThemeProvider>
            </div>
        )
    }
}

export default ProjectDetails;
