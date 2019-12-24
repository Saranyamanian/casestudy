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

export class AddTask extends Component {
    
    constructor(props) {
        super(props)

        this.state = {
            initialState, 
            Priority: '5',
            Parent_Task: 'Parent Task 1',

            personalData: {  
                Task: '',
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
        let { personalData } = this.state;
        let userData = {  
            ...personalData,
            [name]: value,
        }
        this.setState({
             [name]: value,
             personalData :userData
         })
   }

handleUpdateChange = (event) =>{  
    const {Task,Priority,Parent_Task,Start_Date,End_Date}= this.state.personalData;

   
    const formValues = {
        task:  Task,
        priority: Priority,
        parentTask: Parent_Task,
        startDate: Start_Date,
        endDate: End_Date,
        }
   
        axios({
         method: 'post',
         url: 'http://localhost:8079/AddTask',
         data: { 
            task:  Task,
            priority: Priority,
            parentTask: Parent_Task,
            startDate: Start_Date,
            endDate: End_Date,
            },
         headers: {
             'content-type': `application/json;`
         }
     }).then(response =>{
         if(response.data){
             alert("Task Added")          
            this.props.history.push('/ViewTasks')         
         }
     });
    }
   

 
    render()
     {


       

        return (
<div>
    <MuiThemeProvider>
        <div>
        <div className="row col-md-12">
            <h3 style={{marginTop: "15px",marginLeft: "30px"}}>Task Manager</h3>
            </div>
            <div className="row">
        <div className="row col-md-3">
                    <nav className="navbar navbar-primary bg">
                    <form className="form-inline">
                <ul className="list-group" style={{width: "170px"}}>
                    <li className="list-group-item">
                        <div className="dropdown">
                            <button className="dropbtn">Task</button>
                            <div className="dropdown-content">
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
                        <div className="dropdown">
                            <button className="dropbtn">Project</button>
                            <div className="dropdown-content">
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
                        <div className="dropdown">
                            <button className="dropbtn">User</button>
                            <div className="dropdown-content">
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
                <div  className="col-md-9">
                    <nav className="navbar navbar-primary bg">
                    <a id= "color_login" className="navbar-brand navLogin">List of Tasks</a>
                        <form className="form-inline">                        
                        <Link to = '/Home'>  <button className="btn btn-primary my-2 my-sm-0" type="submit">Back</button></Link>
                        </form>
                    </nav>
                </div>
</div>
<div className="row">
<div className="col-md-3">
</div>
<div className="col-md-9">


                <div className="row col-md-12">
                <div name="task" className="input-group-prepend">
                <span style={{marginTop: "39px"}}>Task</span>&nbsp;&nbsp;
                        </div>
                        <TextField
                        name="Task"
                        type="text"
                        hintText="Enter the Task Name"
                        floatingLabelText="Task*"
                        onChange = {this.handleChange}
                        style={{width: "300px",marginLeft: "60px"}}
                        />
                </div>

             <div className="marginTask row col-md-12">
                <div name="Priority"className="input-group mb-3">
                        <div name="Priority" className="input-group-prepend">
                        <label>Priority</label>&nbsp;&nbsp;
                        </div>
                        <select id="width" style={{width: "275px",marginLeft: "40px"}} name="Priority" className="custom-selects" id="inputGroupSelect01" value={this.state.Priority} onChange={this.handleChange}>
                        
                            <option  value="0">0</option>
                            <option  value="5">5</option>
                            <option  value="10">10</option>
                            <option  value="15">15</option>
                            <option  value="20">20</option>
                            <option  value="25">25</option>
                            <option  value="30">30</option>

                        </select>
                </div>
                
                </div>
                <br/>



                 <div name="Start_Date"className="input-group mb-3 row col-md-12">
                        <div name="Start_Date" className="input-group-prepend">
                        <span>Start Date</span>&nbsp;&nbsp;
                        </div>
                        <input type="Date" style={{width: "275px",marginLeft: "22px"}} name="Start_Date" className="custom-selects1" id="inputGroupSelect01" value={this.state.Start_Date}
                                onChange={this.handleChange} ></input>
                 </div>
                 <br/>




                <div name="End_Date"className="input-group mb-3 row col-md-12">
                    <div name="End_Date" className="input-group-prepend">
                    <span>End Date</span>&nbsp;&nbsp;
                    </div>
                    <input type="Date" style={{width: "275px",marginLeft: "28px"}} name="End_Date" className="custom-selects2" id="inputGroupSelect01" value={this.state.End_Date}
                        onChange={this.handleChange}     ></input>
                </div>
                <br/>




                <div name="Parent_Task"className="input-group mb-3 row col-md-12">
                    <div name="Parent_Task" className="input-group-prepend">
                    <span>Parent Task</span>&nbsp;&nbsp;
                    </div>
                    <select id="width" style={{width: "275px",marginLeft: "15px"}} name="Parent_Task" className="custom-selects3" id="inputGroupSelect01" value={this.state.Parent_Task} onChange={this.handleChange}> 
                        <option  value="Parent Task 1">Task 1</option>
                        <option  value="Parent Task 2">Task 2</option>
                        <option  value="Parent Task 3">Task 3</option>
                        <option  value="Parent Task 4 ">Task 4</option>
                    </select>
                </div>


</div>
                <br/>
             </div>
<div>
                    <button type="button" style={{marginLeft: "197px"}} className="btn btn-success" onClick= {this.handleUpdateChange}>Add Task</button>&nbsp;&nbsp;&nbsp;&nbsp;
                    </div>
         </div>
    </MuiThemeProvider>
</div>
        )
    }
}

export default AddTask;