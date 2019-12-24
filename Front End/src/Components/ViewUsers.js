import React, { Component } from 'react';
import axios from 'axios';
import UpdateTask from './UpdateTask';
import {Link} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';


export class ViewUsers extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
          
            lists:[]
        }
    }

    handleDeleteChange = (event) =>{
       
      
       alert("User Deleted")
         let empID =event.target.id;
         console.log(empID)
          
   
             const urlUpdate = `http://localhost:8079/Delete/User/${empID}`;
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
      
       
        const employeeID = event.target.id;
        console.log(employeeID)
        const v = `http://localhost:8079/User/${employeeID}`
        console.log(v)
        axios.get(`http://localhost:8079/User/${employeeID}`)
            .then(response => response.data)
            .then((data) => {
             console.log(data)
             const formValues = {
                employeeID:employeeID,
                firstName: data.firstName,
                lastName: data.lastName,
                }
                console.log(data)
                console.log(this.state.lists)
                console.log("-----------------")
                this.props.history.push({pathname:'/UpdateUser',
                state:{response:formValues}})
                })
        // this.props.history.push('/UpdateTask')
       
    }
    renderTableData() {
        console.log(this.state.lists)
        console.log(this.state.lists[0])
   return this.state.lists.map((list,index) => {
 
        const {employeeID,firstName,lastName} = list //destructuring
      
      return (

          
         <tr key={employeeID}>
            <td>{employeeID}</td>
            <td>{firstName}</td>
            <td>{lastName}</td>
            <td><button type="button" id={employeeID} class="btn btn-success" style={{width: "90px"}} onClick= {this.handleUpdateChange}>Edit User</button></td> 
            <td><button type="button"  id={employeeID}  class="btn btn-light" onClick={this.handleDeleteChange} >Delete</button></td>

         </tr>
         
      )
   })
}

componentDidMount()  {
  
   
    console.log("Inside component did mount")
{


axios.get(`http://localhost:8079/Details/User`)
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
                  <div className="row col-md-12">
            <h3 style={{marginTop: "15px",marginLeft: "30px"}}>Task Manager</h3>
            </div>
                      <div class="row">
                  <div class="col-md-3">
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
                    <a id= "color_login" className="navbar-brand navLogin">List of Tasks</a>
                        <form className="form-inline">                        
                        <Link to = '/Home'>  <button className="btn btn-primary my-2 my-sm-0" type="submit">Back</button></Link>
                        </form>
                    </nav>
                </div>
                </div>
                 <div className="margin_user"> 
                <br/>
             
              <br/>
              <table id='students'>
                 <thead>
                     <tr>
                         <th>Emp ID</th>
                         <th>Firstname</th>
                         <th>Lastname</th>
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

export default ViewUsers
