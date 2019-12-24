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

export class UpdateUser extends Component {
    
    constructor(props) {
        super(props)

        this.state = {
            initialState, 
            Priority: '5',
            Parent_Task: 'Parent Task 1',
            // date: new Date(),
            // Start_Date: new Date(),
            // End_Date: new Date(),

            personalData: {  
                firstName: '',
                lastName: '',
                employeeID:  '',  
                   } 
        }
        this.handleChange = this.handleChange.bind(this)
    }


    componentDidMount() {
        const {firstName,lastName,employeeID} = this.state.personalData;

        const state = this.props.location.state.response
        console.log(state)
        console.log(state.firstName)
        console.log(state.lastName)
        console.log(state.employeeID)
      
        this.setState({
            firstName: state.firstName,
            lastName: state.lastName,
            employeeID: state.employeeID,
          
        })
       
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

    console.log(this.state.firstName)
    console.log(this.state.lastName)
    console.log(this.state.employeeID)
   

    console.log(this.state.personalData.firstName)
    const state = this.props.location.state.response;
    console.log(state.employeeID)
    const {firstName,lastName}= this.state.personalData;

   
    const formValues = {
        firstName:  firstName,
        lastName: lastName,
        employeeID: state.employeeID,
        }
   
      const  url= `http://localhost:8079/Update/User/${state.employeeID}`;
        console.log(url)
        console.log("----------------------------")
        axios({
         method: 'put',
         url: `http://localhost:8079/Update/User/${state.employeeID}`,
         data: { 
            firstName: this.state.firstName,
            lastName: this.state.lastName,
            employeeID: state.employeeID,
            },
         headers: {
             'content-type': `application/json;`
         }
     }).then(response =>{
         console.log(response.data)
         if(response.data){
             alert("Updated User")
          
             this.props.history.push('/ViewUsers')
         
         }
     });
    }
   

 
    render()
     {

        const state = this.props.location.state.response
       

        return (
<div>
    <MuiThemeProvider >



        
        <div >
        <div className="row col-md-12">
            <h3 style={{marginTop: "15px",marginLeft: "30px"}}>Task Manager</h3>
            </div>
            <div class="row">
            <div className="col-md-3">
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
                <div class="col-md-9">
                    <nav className="navbar navbar-primary bg">
                    <a id= "color_login" className="navbar-brand navLogin">Add User</a>
                    <form className="form-inline">                        
                        <Link to = '/Home'>  <button className="btn btn-primary my-2 my-sm-0" type="submit">Back</button></Link>
                        </form>
                    </nav>
                    </div>
                    </div>
</div>


<div className="row">
<div className="col-md-3">
</div>
<div className="col-md-9">

<div className="row col-md-12">
                <div name="task" className="input-group-prepend">
                <span style={{marginTop: "39px"}}>First Name</span>&nbsp;&nbsp;
                        </div>
                        <TextField
                        name="firstName"
                        type="text"
                        hintText="Enter your First Name"
                        floatingLabelText="First Name*"
                        value={this.state.firstName}
                        onChange = {this.handleChange}
                        style={{width: "275px",marginLeft: "28px"}}
                        />
                </div>
                <br/>
                <div className="row col-md-12">
                <div name="task" className="input-group-prepend">
                <span style={{marginTop: "39px"}}>Last Name</span>&nbsp;&nbsp;
                        </div>
                        <TextField
                        name="lastName"
                        type="text"
                        hintText="Enter your Last Name"
                        floatingLabelText="Last Name*"
                        value={this.state.lastName}
                        onChange = {this.handleChange}
                        style={{width: "275px",marginLeft: "28px"}}
                        />
                </div>
                <br/>
                <div className="row col-md-12">
                <div name="task" className="input-group-prepend">
                <span style={{marginTop: "39px"}}>Employee ID</span>&nbsp;&nbsp;
                        </div>
                        <TextField
                        name="employeeID"
                        type="text"
                        hintText="Enter your Employee ID"
                        floatingLabelText="Emp ID*"
                        value={state.employeeID}
                        onChange = {this.handleChange}
                        style={{width: "275px",marginLeft: "15px"}}
                        />
                </div>
              

                    <br/>
                    <br/>
                    </div>     
</div>





                
                    <div>
                    <button type="button" class="btn btn-success" style={{marginLeft: "242px"}} onClick= {this.handleUpdateChange}>Save</button>&nbsp;&nbsp;&nbsp;&nbsp;
  
         </div>
      
    </MuiThemeProvider>
</div>
        )
    }
}

export default UpdateUser;