import React, { Component } from 'react';
import { Route, Router } from 'react-router-dom';
import ViewTasks from './Components/ViewTasks';
import {Link, BrowserRouter} from 'react-router-dom';
import UpdateTask from './Components/UpdateTask';
import AddTask from './Components/AddTask';
import Home from './Components/Home';

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
                </div>
                </BrowserRouter>
        )
    }
}

export default Routers;