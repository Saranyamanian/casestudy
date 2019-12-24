import React, { Component } from 'react';
import { Route, Router } from 'react-router-dom';
import ViewTasks from './Components/ViewTasks';
import {Link, BrowserRouter} from 'react-router-dom';
import UpdateTask from './Components/UpdateTask';
import AddUser from './Components/AddUser';
import AddTask from './Components/AddTask';
import ViewUsers from './Components/ViewUsers';
import Home from './Components/Home';
import AddProject from './Components/AddProject';
import ViewProjects from './Components/ViewProjects';
import UpdateUser from './Components/UpdateUser'
import UpdateProject from './Components/UpdateProject'

class Routers extends Component {
    render() {
        return (
            <BrowserRouter>
                <div>
                    <Route exact path="/" component={Home} />
                    <Route exact path="/Home" component={Home} />
                    <Route exact path="/AddProject" component={AddProject} />
                    <Route exact path="/AddTask" component={AddTask} />
                    <Route exact path="/AddUser" component={AddUser} />
                    <Route exact path="/UpdateUser" component={UpdateUser} />
                    <Route exact path="/UpdateProject" component={UpdateProject} />
                    <Route exact path="/ViewProjects" component={ViewProjects} />
                    <Route exact path="/ViewUsers" component={ViewUsers} />
                    <Route exact path="/UpdateTask" component = {UpdateTask}/> 
                    <Route exact path="/ViewTasks" component = {ViewTasks}/> 
                </div>
                </BrowserRouter>
        )
    }
}

export default Routers;