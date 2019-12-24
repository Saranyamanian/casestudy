import React, { Component } from 'react';
import axios from 'axios';
import UpdateTask from './UpdateTask';
import {Link} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
export class ViewTasks extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
          
            lists:[]
        }
    }
    

    handleDeleteChange = (event) =>{
       
      
        alert("Task Deleted")
         let task =event.target.id;
           
    
             const urlUpdate = `http://localhost:8079/Delete/${task}`;
              axios.delete(urlUpdate).then(response => response.data)
              .then((data) => {
                  this.setState({ 
                      lists:data
          
          
                  }
                  )
               })
      }   

    handleUpdateChange = (event) =>{     
       
        const Task_ID = event.target.id;
        const v = `http://localhost:8079/${Task_ID}`
        axios.get(`http://localhost:8079/${Task_ID}`)
            .then(response => response.data)
            .then((data) => {
             const formValues = {
                Task_ID:Task_ID,
                Task: data.task,
                Priority: data.priority,
                Parent_Task: data.parentTask,
                Start_Date:data.startDate,
                End_Date:data.endDate,
                }
                this.props.history.push({pathname:'/UpdateTask',
                state:{response:formValues}})
                })
        // this.props.history.push('/UpdateTask')
       
    }
    renderTableData() {
   return this.state.lists.map((list,index) => {
 
        const {task,priority,parentTask,startDate,endDate,task_ID} = list //destructuring
      
      return (

          
         <tr key={task_ID}>
            <td>{task_ID}</td>
            <td>{task}</td>
            <td>{priority}</td>
            <td>{parentTask}</td>
            <td>{startDate}</td>
            <td>{endDate}</td>
            <td><button type="button" id={task_ID} className="btn btn-success" onClick= {this.handleUpdateChange} style={{width: "90px"}}>Edit Task</button></td> 
            <td><button type="button"  id={task}  className="btn btn-light" onClick={this.handleDeleteChange} >Delete</button></td>

         </tr>
         
      )
   })
}

componentDidMount()  {    
    console.log("Inside component did mount")
{
axios.get(`http://localhost:8079/TaskDetails`)
.then(response => response.data)
.then((data) => {
  this.setState({ 
      lists:data
  }
  )
  console.log(this.state.lists)
})
}
}
    render() {
        return (
            <div>
                  <MuiThemeProvider>
                  <div className="row col-md-12">
            <h3 style={{marginTop: "15px",marginLeft: "30px"}}>Task Manager</h3>
            </div>
                      <div className="row">
                  <div className="col-md-3">
                    <nav className="navbar navbar-primary bg">
                    <a id= "color_login" className="navbar-brand navLogin"></a>
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
                 <div className="margin_project"> 
                <br/>
             
              <br/>
              <table id='students'>
                 <thead>
                     <tr>
                         <th>Task_ID</th>
                         <th>Task</th>
                         <th>Parent Task</th>
                         <th>Priority</th>
                         <th> Start date </th>
                         <th> End date   </th>
                         <th colSpan="2" >Action</th>
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

export default ViewTasks
