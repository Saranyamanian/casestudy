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

export class AddUser extends Component {
    
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


    // componentDidMount() {
    //     const { Task, Priority, Parent_Task, Start_Date, End_Date } = this.state;

    //     const state = this.props.location.state.response
    //     console.log(state.Task)
    //     console.log(state.Priority)
    //     console.log(state.Parent_Task)
    //     console.log(state.Start_Date)
    //     console.log(state.End_Date)
    //     this.setState({
    //         Task: state.Task,
    //         Priority: state.Priority,
    //         Parent_Task: state.Parent_Task,
    //         Start_Date: state.Start_Date,
    //         End_Date: state.End_Date
    //     })
    //     console.log(this.state.Task)
    //     console.log(this.state.Priority)
    //     console.log(this.state.Parent_Task)
    //     console.log(this.state.Start_Date)
    //     console.log(this.state.End_Date)
    // }

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

    console.log(this.state.personalData)
  
    const {firstName,lastName,employeeID}= this.state.personalData;

   
    const formValues = {
        firstName:  firstName,
        lastName: lastName,
        employeeID: employeeID,
        }
   
     
        console.log("----------------------------")
        axios({
         method: 'post',
         url: 'http://localhost:8098/Add/User',
         data: { 
            firstName:  firstName,
            lastName: lastName,
            employeeID: employeeID,
            },
         headers: {
             'content-type': `application/json;`
         }
     }).then(response =>{
         console.log(response.data)
         if(response.data){
             alert("Registered Successfully")
          
             this.props.history.push('/UserTasks')
         
         }
     });
    }
   

 
    render()
     {


       

        return (
<div>
    <MuiThemeProvider >
        <div >
                <div >
                    <nav className="navbar navbar-primary bg">
                    <a id= "color_login" className="navbar-brand navLogin">Add User</a>
                        <form className="form-inline">
                          <Link to = '/UserTasks'> <button className="btn btn-success my-2 my-sm-0" type="submit">User Details</button></Link>&nbsp;&nbsp;&nbsp;&nbsp;
                        <Link to = '/Home'> <button className="btn btn-success my-2 my-sm-0" type="submit">Home</button></Link>&nbsp;&nbsp;&nbsp;&nbsp;
                     
                        </form>
                    </nav>
                </div >
                <div className="marginUser">
                <div>
                        <TextField
                        name="firstName"
                        type="text"
                        hintText="Enter your First Name"
                        floatingLabelText="First Name*"
                        onChange = {this.handleChange}
                        />
                </div>
                <br/>
                <div>
                        <TextField
                        name="lastName"
                        type="text"
                        hintText="Enter your Last Name"
                        floatingLabelText="Last Name*"
                        onChange = {this.handleChange}
                        />
                </div>
                <br/>
                <div>
                        <TextField
                        name="employeeID"
                        type="text"
                        hintText="Enter your Employee ID"
                        floatingLabelText="Emp ID*"
                        onChange = {this.handleChange}
                        />
                </div>
              

                    <br/>
                    <br/>

                    <button type="button" class="btn btn-info" onClick= {this.handleUpdateChange}>Save</button>&nbsp;&nbsp;&nbsp;&nbsp;
  
         </div>
         </div>
    </MuiThemeProvider>
</div>
        )
    }
}

export default AddUser;