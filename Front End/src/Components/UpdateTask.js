import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import TextField from 'material-ui/TextField';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import { Link } from 'react-router-dom';
import Calendar from 'react-calendar';
import RaisedButton from 'material-ui/RaisedButton';
import ViewTasks from './ViewTasks'
import axios from 'axios';

const API_URL = 'http://localhost:8079';
const initialState = {
    Task: '',
    Priority: '',
    Parent_Task: '',
    Start_Date: '',
    End_Date: '',
}

export class UpdateTask extends Component {

    constructor(props) {
        super(props)

        this.state = {
            initialState,
            // Priority: '5',
            // Parent_Task: 'Parent Task 1',
            // date: new Date(),
            // Start_Date: new Date(),
            // End_Date: new Date(),


        }
        this.handleChange = this.handleChange.bind(this)
    }
    componentDidMount() {
        const { Task, Priority, Parent_Task, Start_Date, End_Date } = this.state;

        const state = this.props.location.state.response
        console.log(state.Task)
        console.log(state.Priority)
        console.log(state.Parent_Task)
        console.log(state.Start_Date)
        console.log(state.End_Date)
        this.setState({
            Task: state.Task,
            Priority: state.Priority,
            Parent_Task: state.Parent_Task,
            Start_Date: state.Start_Date,
            End_Date: state.End_Date
        })
        console.log(this.state.Task)
        console.log(this.state.Priority)
        console.log(this.state.Parent_Task)
        console.log(this.state.Start_Date)
        console.log(this.state.End_Date)
    }
    handleChange = (event) => {
        const { name, value } = event.target;
        let { personalData } = this.state;
        let userData = {
            ...personalData,
            [name]: value,
        }
        this.setState({
            [name]: value,
            personalData: userData
        })
    }

    handleUpdateChange = (event) => {

        // console.log(this.state.personalData)
        const { Task, Priority, Parent_Task, Start_Date, End_Date } = this.state;
        console.log(this.state.Priority)
        console.log(this.state.Parent_Task)
        const state = this.props.location.state.response
        const formValues = {
            task: this.state.Task,
            priority: this.state.Priority,
            parentTask: this.state.Parent_Task,
            startDate: this.state.Start_Date,
            endDate: this.state.End_Date,
        }
        console.log(formValues)
        alert('update')
        const url = `${API_URL}/UpdateTask/${state.Task_ID}`;
        console.log(url)
        axios.put(url, formValues).then(response => response.data)
            .then((data) => {
                console.log(data)

                //   this.props.history.push("/Success")}
                this.props.history.push("/ViewTasks")

                console.log("-----------------")
            })

       
    }



    render() {


        const state = this.props.location.state.response

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
                    <a id= "color_login" className="navbar-brand navLogin"></a>
                        <form className="form-inline">                      
                        <ul className="list-group">                              
                              <li className="list-group-item"><Link to = '/AddTask'> <button className="btn my-2 my-sm-0" type="submit">Add Task</button></Link>&nbsp;&nbsp;&nbsp;&nbsp;</li>
                              <li className="list-group-item"><Link to = '/ViewTasks'> <button className="btn my-2 my-sm-0" type="submit">View Tasks</button></Link>&nbsp;&nbsp;&nbsp;&nbsp;</li>
                        </ul>                      
                        </form>
                    </nav>
                </div>
                <div className="col-md-9"><nav className="navbar navbar-primary bg"><a id="color_login" className="navbar-brand navLogin">Add Tasks</a><form className="form-inline"><a href="/Home">  <button className="btn btn-primary my-2 my-sm-0" type="submit">Back</button></a></form></nav></div>
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
                                value={this.state.Task}
                                onChange={this.handleChange}
                                style={{width: "300px",marginLeft: "60px"}}
                            />
                        </div>

                        <div className="marginTask row col-md-12">
                            <div name="Priority" class="input-group mb-3">
                                <div name="Priority" class="input-group-prepend">
                                <label>Priority</label>&nbsp;&nbsp;
                                </div>
                                <select id="width" name="Priority" style={{width: "275px",marginLeft: "40px"}} class="custom-selects" id="inputGroupSelect01" value={this.state.Priority} onChange={this.handleChange}>

                                    <option value="0" selected>0</option>
                                    <option value="5">5</option>
                                    <option value="10">10</option>
                                    <option value="15">15</option>
                                    <option value="20">20</option>
                                    <option value="25">25</option>
                                    <option value="30">30</option>

                                </select>
                            </div>
                            <br />



                            <div name="Start_Date" class="input-group mb-3 row col-md-12">
                                <div name="Start_Date" class="input-group-prepend">
                                <span>Start Date</span>&nbsp;&nbsp;
                                </div>
                                <input type="Date" name="Start_Date" style={{width: "275px",marginLeft: "22px"}} class="custom-selects1" id="inputGroupSelect01" value={this.state.Start_Date}
                                    onChange={this.handleChange} ></input>
                            </div>
                            <br />




                            <div name="End_Date" class="input-group mb-3 row col-md-12">
                                <div name="End_Date" class="input-group-prepend">
                                <span>End Date</span>&nbsp;&nbsp;
                                </div>
                                <input type="Date" name="End_Date" style={{width: "275px",marginLeft: "28px"}} class="custom-selects2" id="inputGroupSelect01" value={this.state.End_Date}
                                    onChange={this.handleChange}     ></input>
                            </div>
                            <br />




                            <div name="Parent_Task" class="input-group mb-3 row col-md-12">
                                <div name="Parent_Task" class="input-group-prepend">
                                <span>Parent Task</span>&nbsp;&nbsp;
                                </div>
                                <select id="width" name="Parent_Task" style={{width: "275px",marginLeft: "15px"}} class="custom-selects3" id="inputGroupSelect01" value={this.state.Parent_Task} onChange={this.handleChange}>
                                    <option value="Task 1" selected>Task 1</option>
                                    <option value="Task 2">Task 2</option>
                                    <option value="Task 3">Task 3</option>
                                    <option value="Task 4 ">Task 4</option>
                                </select>
                            </div>
                           </div>
                           <br />
                        </div>
                        </div>
                    <div class="btn-group" style={{marginLeft: "67px"}}>
                        <button type="button" class="btn btn-success" onClick={this.handleUpdateChange}>Update Task</button>&nbsp;&nbsp;&nbsp;&nbsp;
                        <Link to = '/ViewTasks'> <button type="button" class="btn btn-light" onClick={this.handleDeleteChange} >Cancel</button></Link>
                        </div>
                    </div>
                </MuiThemeProvider>
            </div>
        )
    }
}

export default UpdateTask;