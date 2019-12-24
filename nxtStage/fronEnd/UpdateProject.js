import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import TextField from 'material-ui/TextField';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import {Link} from 'react-router-dom';
import Calendar from 'react-calendar';
import RaisedButton from 'material-ui/RaisedButton';
import ListOfTasks from './ListOfTasks'
import axios from 'axios';


const initialState = {
    Task: '',
    Priority: '',
    Parent_Task:  '',
    Start_Date:'',
    End_Date:'',    
}

export class UpdateProject extends Component {
    

   
constructor(props) {
    super(props)

    this.state = {
        initialState, 
        Priority: '5',
        Parent_Task: 'Parent Task 1',
        // date: new Date(),
        // Start_Date: new Date(),
        // End_Date: new Date(),

        projectData: {  
            projectName: '',
            managerName:'',
            Priority: '5',
            Parent_Task:  'Parent Task 1',
            Start_Date: new Date(),
            End_Date: new Date(),
   } 
    }
    this.handleChange = this.handleChange.bind(this)
}

handleChange = (event) =>{
    const { name, value } = event.target;
    let { projectData } = this.state;
    let userData = {  
        ...projectData,
        [name]: value,
    }
    this.setState({
         [name]: value,
         projectData :userData
     })
}


componentDidMount() {
    const {managerName,projectName,Start_Date,End_Date,employeeID,Priority} = this.state.projectData;

    const state = this.props.location.state.response
    console.log(state)
    console.log(state.managerName)
    console.log(state.projectName)
    console.log(state.Start_Date)
  
    this.setState({
        managerName: state.managerName,
        projectName: state.projectName,
        Start_Date: state.Start_Date,
        End_Date:state.End_Date,
        Priority:state.priority
      
    })
   
}
handleUpdateChange = (event) =>{

console.log(this.state.projectData)
console.log(this.state.projectData.projectName)
console.log(this.state.projectName)
console.log(this.state.managerName)
console.log(this.state.Start_Date)
console.log(this.state.End_Date)
console.log(this.state.Priority)

const {projectName,Priority,managerName,Start_Date,End_Date}= this.state;
const state = this.props.location.state.response

const formValues = {
    projectName:  projectName,
    priority: Priority,
    managerName: managerName,
    startDate: Start_Date,
    endDate: End_Date,
    }

 
    console.log("----------------------------")
    axios({
     method: 'put',
     url: `http://localhost:8098/Project/Update/${state.projectID}`,
     data: { 
        projectName:  projectName,
        priority: Priority,
        managerName: managerName,
        startDate: Start_Date,
        endDate: End_Date,
        },
     headers: {
         'content-type': `application/json;`
     }
 }).then(response =>{
     console.log(response.data)
     if(response.data){
         alert("Registered Successfully")
      
        this.props.history.push('/ProjectDetails')
      
     
     }
 });
}

 handleDeleteChange = (event) =>{
       
      
       alert("delete")
         let empID =event.target.id;
         console.log(empID)
          
   
             const urlUpdate = `http://localhost:8098/Delete/User/${empID}`;
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

 
    render()
     {


       

        return (
<div>
    <MuiThemeProvider >
        <div >
                <div >
                    <nav className="navbar navbar-primary bg">
                    <a id= "color_login" className="navbar-brand navLogin">Add Project</a>
                        <form className="form-inline">
                          <Link to = '/ProjectDetails'> <button className="btn btn-success my-2 my-sm-0" type="submit">Project Details</button></Link>&nbsp;&nbsp;&nbsp;&nbsp;
                        <Link to = '/Home'> <button className="btn btn-success my-2 my-sm-0" type="submit">Home</button></Link>&nbsp;&nbsp;&nbsp;&nbsp;
                     
                        </form>
                    </nav>
                </div >
                <div className="marginUser">
                <div>
                        <TextField
                        name="projectName"
                        type="text"
                        hintText="Enter Project Name"
                        floatingLabelText="Project Name*"
                        value={this.state.projectName}
                        onChange = {this.handleChange}
                        />
                </div>
                <div>
                        <TextField
                        name="managerName"
                        type="text"
                        hintText="Enter Manager Name"
                        floatingLabelText="Manager Name*"
                        value={this.state.managerName}
                        onChange = {this.handleChange}
                        />
                </div>

             <div className="marginTask">
                <div name="Priority"class="input-group mb-3">
                        <div name="Priority" class="input-group-prepend">
                            <label name="Priority" class="input-group-text" for="inputGroupSelect01">Priority </label>
                        </div>
                        <select id="width" name="Priority" class="custom-selects" id="inputGroupSelect01" value={this.state.Priority} onChange={this.handleChange}>
                        
                            <option  value="0" selected>0</option>
                            <option  value="5">5</option>
                            <option  value="10">10</option>
                            <option  value="15">15</option>
                            <option  value="20">20</option>
                            <option  value="25">25</option>
                            <option  value="30">30</option>

                        </select>
                </div>
                <br/>



                 <div name="Start_Date"class="input-group mb-3">
                        <div name="Start_Date" class="input-group-prepend">
                            <label name="Start_Date" class="input-group-text" for="inputGroupSelect01">Start Date</label>
                        </div>
                        <input type="Date" name="Start_Date" class="custom-selects1" id="inputGroupSelect01" value={this.state.Start_Date}
                                onChange={this.handleChange} ></input>
                 </div>
                 <br/>




                <div name="End_Date"class="input-group mb-3">
                    <div name="End_Date" class="input-group-prepend">
                        <label name="End_Date" class="input-group-text" for="inputGroupSelect01">End Date</label>
                    </div>
                    <input type="Date" name="End_Date" class="custom-selects2" id="inputGroupSelect01" value={this.state.End_Date}
                        onChange={this.handleChange}     ></input>
                </div>
                <br/>




             
                <br/>
             </div>

                    <button type="button" class="btn btn-info" onClick= {this.handleUpdateChange}>Save</button>&nbsp;&nbsp;&nbsp;&nbsp;
  
         </div>
         </div>
    </MuiThemeProvider>
</div>
        )
    }
}

export default UpdateProject;