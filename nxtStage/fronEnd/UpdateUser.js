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
   
      const  url= `http://localhost:8098/Update/User/${state.employeeID}`;
        console.log(url)
        console.log("----------------------------")
        axios({
         method: 'put',
         url: `http://localhost:8098/Update/User/${state.employeeID}`,
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
             alert("Registered Successfully")
          
             this.props.history.push('/UserTasks')
         
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
                        value={this.state.firstName}
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
                        value={this.state.lastName}
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
                        value={state.employeeID}
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

export default UpdateUser;