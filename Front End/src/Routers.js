import React, { Component } from 'react';
import { Route, Router } from 'react-router-dom';
import ViewTasks from './Components/ViewTasks';
import {Link, BrowserRouter} from 'react-router-dom';
import UpdateTask from './Components/UpdateTask';
import AddTask from './Components/AddTask';
import Home from './Components/Home';
import AddProject from './Components/AddProject';
import AddUser from './Components/AddUser';
import UpdateUser from './Components/UpdateUser';
import UpdateProject from './Components/UpdateProject';
import ViewProjects from './Components/ViewProjects';
import ViewUsers from './Components/ViewUsers';

class Routers extends Component {
    render() {
        return (
            <BrowserRouter>
                <div>
                    <Route exact path="/" component={Home} />
                    <Route exact path="/Home" component={Home} />
                    <Route exact path="/AddTask" component={AddTask} />
                    <Route exact path="/UpdateTask" component = {UpdateTask}/> 
                    <Route exact path="/ViewTasks" component = {ViewTasks}/> 
                    <Route exact path="/AddProject" component={AddProject} />
                    <Route exact path="/AddUser" component={AddUser} />
                    <Route exact path="/UpdateUser" component={UpdateUser} />
                    <Route exact path="/UpdateProject" component={UpdateProject} />
                    <Route exact path="/ViewProjects" component={ViewProjects} />
                    <Route exact path="/ViewUsers" component={ViewUsers} />
                </div>
                </BrowserRouter>
        )
    }
}

export default Routers;