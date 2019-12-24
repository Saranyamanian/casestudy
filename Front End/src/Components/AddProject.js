import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import TextField from 'material-ui/TextField';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import {Link} from 'react-router-dom';
import Calendar from 'react-calendar';
import RaisedButton from 'material-ui/RaisedButton';
import ViewTasks from './ViewTasks'
import axios from 'axios';


const initialState = {
    Task: '',
    Priority: '',
    Parent_Task:  '',
    Start_Date:'',
    End_Date:'',    
}

export class AddProject extends Component {
    

   
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

handleUpdateChange = (event) =>{

console.log(this.state.projectData)
console.log(this.state.projectData.projectName)
console.log(this.state.projectName)
const {projectName,Priority,managerName,Start_Date,End_Date}= this.state.projectData;


const formValues = {
    projectName:  projectName,
    priority: Priority,
    managerName: managerName,
    startDate: Start_Date,
    endDate: End_Date,
    }
console.log(formValues)
 
    console.log("----------------------------")
    axios({
     method: 'post',
     url: 'http://localhost:8079/Add/Project',
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
         alert("Project Added")
      
          this.props.history.push('/ViewProjects')
     
     }
 });
}


 
    render()
     {


       

        return (
<div>
    <MuiThemeProvider >
        <div >
        <div className="row col-md-12">
            <h3 style={{marginTop: "15px",marginLeft: "30px"}}>Project Manager</h3>
            </div>
                <div className="row">
                <div className="row col-md-3">
                    <nav className="navbar navbar-primary bg">
                    <a id= "color_login" className="navbar-brand navLogin"></a>
                    <form className="form-inline">
                <ul className="list-group" style={{width: "170px"}}>
                    <li className="list-group-item">
                        <div class="dropdown">
                            <button class="dropbtn">Task</button>
                            <div class="dropdown-content">
                                <div className="list-group-item">
                                    <Link to='/AddTask'>
                                    <button style={{width: "174px", height: "10px"}} className="btn my-2 my-sm-0" type="submit">Add Task</button>
                                    </Link>&nbsp;&nbsp;&nbsp;&nbsp;</div>
                                <div className="list-group-item">
                                    <Link to='/ViewTasks'>
                                    <button style={{width: "174px", height: "10px"}} className="btn my-2 my-sm-0" type="submit">View Task</button>
                                    </Link>&nbsp;&nbsp;&nbsp;&nbsp;</div>
                            </div>
                        </div>
                    </li>
                    <li className="list-group-item">
                        <div class="dropdown">
                            <button class="dropbtn">Project</button>
                            <div class="dropdown-content">
                                <div className="list-group-item">
                                    <Link to='/AddProject'>
                                    <button style={{width: "174px", height: "10px"}} className="btn my-2 my-sm-0" type="submit">Add Project</button>
                                    </Link>&nbsp;&nbsp;&nbsp;&nbsp;</div>
                                <div className="list-group-item">
                                    <Link to='/ViewProjects'>
                                    <button style={{width: "174px", height: "10px"}} className="btn my-2 my-sm-0" type="submit">View Project</button>
                                    </Link>&nbsp;&nbsp;&nbsp;&nbsp;</div>
                            </div>
                        </div>
                    </li>
                    <li className="list-group-item">
                        <div class="dropdown">
                            <button class="dropbtn">User</button>
                            <div class="dropdown-content">
                                <div className="list-group-item">
                                    <Link to='/AddUser'>
                                    <button style={{width: "174px", height: "10px"}} className="btn my-2 my-sm-0" type="submit">Add User</button>
                                    </Link>&nbsp;&nbsp;&nbsp;&nbsp;</div>
                                <div className="list-group-item">
                                    <Link to='/ViewUsers'>
                                    <button style={{width: "174px", height: "10px"}} className="btn my-2 my-sm-0" type="submit">View User</button>
                                    </Link>&nbsp;&nbsp;&nbsp;&nbsp;</div>
                            </div>
                        </div>
                    </li>

                </ul>
            </form>
                    </nav>
                </div>
                <div  class="col-md-9">
                    <nav className="navbar navbar-primary bg">
                    <a id= "color_login" className="navbar-brand navLogin">Add Project</a>
                    <form className="form-inline">                        
                        <Link to = '/Home'>  <button className="btn btn-primary my-2 my-sm-0" type="submit">Back</button></Link>
                        </form>
                    </nav>
                    </div>
                </div >


                

                <div className="row">
<div className="col-md-3">
</div>
<div className="col-md-9">
<div className="marginUser">
<div className="row col-md-12">
               
                <div name="project" className="input-group-prepend">
                <span style={{marginTop: "39px"}}>Project Name</span>&nbsp;&nbsp;
                        </div>
                        <TextField
                        name="projectName"
                        type="text"
                        hintText="Enter Project Name"
                        floatingLabelText="Project Name*"
                        onChange = {this.handleChange}
                        style={{width: "300px",marginLeft: "50px"}}
                        />
                
                </div> <div className="row col-md-12">
                <div name="manager" className="input-group-prepend">
                <span style={{marginTop: "39px"}}>Manager Name</span>&nbsp;&nbsp;
                        </div>
                        <TextField
                        name="managerName"
                        type="text"
                        hintText="Enter Manager Name"
                        floatingLabelText="Manager Name*"
                        onChange = {this.handleChange}
                        style={{width: "300px",marginLeft: "39px"}}
                        />
                
</div>
             <div className="row col-md-12 marginTask">
             
                <div name="Priority"class="input-group mb-3 col-md-9">
                        <div name="Priority" class="input-group-prepend">
                        <label>Priority</label>&nbsp;&nbsp;
                        </div>
                        <select id="width" style={{width: "275px",marginLeft: "79px"}} name="Priority" class="custom-selects" id="inputGroupSelect01" value={this.state.Priority} onChange={this.handleChange}>
                        
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
                            <label>Start Date</label>&nbsp;&nbsp;
                        </div>
                        <input type="Date" style={{width: "275px",marginLeft: "73px"}} name="Start_Date" class="custom-selects1" id="inputGroupSelect01" value={this.state.Start_Date}
                                onChange={this.handleChange} ></input>
                 </div>
                 <br/>




                <div name="End_Date"class="input-group mb-3">
                    <div name="End_Date" class="input-group-prepend">
                    <label>End Date</label>&nbsp;&nbsp;
                    </div>
                    <input type="Date" name="End_Date" style={{width: "275px",marginLeft: "79px"}} class="custom-selects2" id="inputGroupSelect01" value={this.state.End_Date}
                        onChange={this.handleChange}     ></input>
                </div>
                <br/>




             
                <br/>
             </div>

</div>
</div>




             
         </div>
         <div>
                    <button type="button" class="btn btn-success" style={{marginLeft: "320px"}} onClick= {this.handleUpdateChange}>Save</button>&nbsp;&nbsp;&nbsp;&nbsp;
                    </div>
         </div>
    </MuiThemeProvider>
</div>
        )
    }
}

export default AddProject;