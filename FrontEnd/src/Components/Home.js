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

export class Home extends Component {
    
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

    console.log(this.state.personalData)
  
    const {Task,Priority,Parent_Task,Start_Date,End_Date}= this.state.personalData;

   
    const formValues = {
        task:  Task,
        priority: Priority,
        parentTask: Parent_Task,
        startDate: Start_Date,
        endDate: End_Date,
        }
   
     
        console.log("----------------------------")
        axios({
         method: 'post',
         url: 'http://localhost:8079/Add',
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
         console.log(response.data)
         if(response.data){
             alert("Registered Successfully")
          
            //  this.props.history.push({pathname:'/ViewTasks',
            //  state:{response:formValues}})
         
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
                <div className="row col-md-6">
                    <nav className="navbar navbar-primary bg">
                    <a id= "color_login" className="navbar-brand navLogin"></a>
                        <form className="form-inline">                      
                        <ul className="list-group">                              
                              <li className="list-group-item"><Link to = '/AddTask'> <button className="btn my-2 my-sm-0" type="submit">Add Task</button></Link>&nbsp;&nbsp;&nbsp;&nbsp;</li>
                              <li className="list-group-item"><Link to = '/ViewTasks'> <button className="btn my-2 my-sm-0" type="submit">View Task</button></Link>&nbsp;&nbsp;&nbsp;&nbsp;</li>
                        </ul>                      
                        </form>
                    </nav>
                </div>
                </div>
             
    </MuiThemeProvider>
</div>
        )
    }
}

export default Home;