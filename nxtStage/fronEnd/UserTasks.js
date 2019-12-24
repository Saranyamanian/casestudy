import React, { Component } from 'react';
import axios from 'axios';
import UpdateTask from './UpdateTask';
import {Link} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';


export class UserTasks extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
          
            lists:[]
        }
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

    handleUpdateChange = (event) =>{
      
       
        const employeeID = event.target.id;
        console.log(employeeID)
        const v = `http://localhost:8098/User/${employeeID}`
        console.log(v)
        axios.get(`http://localhost:8098/User/${employeeID}`)
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
            <td><button type="button" id={employeeID} class="btn btn-info" onClick= {this.handleUpdateChange}>Edit User</button></td> 
            <td><button type="button"  id={employeeID}  class="btn btn-danger" onClick={this.handleDeleteChange} >Delete</button></td>

         </tr>
         
      )
   })
}

componentDidMount()  {
  
   
    console.log("Inside component did mount")
{


axios.get(`http://localhost:8098/Details/User`)
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
                  <div>
                    <nav className="navbar navbar-primary bg">
                    <a id= "color_login" className="navbar-brand navLogin">List of Users</a>
                        <form className="form-inline">
                        <Link to = '/AddUser'> <button className="btn btn-success my-2 my-sm-0" type="submit">Add User</button></Link>&nbsp;&nbsp;&nbsp;&nbsp;
                        <Link to = '/Home'>  <button className="btn btn-success my-2 my-sm-0" type="submit">Home</button></Link>
                        </form>
                    </nav>
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

export default UserTasks
