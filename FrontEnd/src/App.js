import React from 'react';
import logo from './logo.svg';
import './App.css';


import 'bootstrap/dist/css/bootstrap.min.css';
import { AddTask } from './Components/AddTask';

import index from './index'
import { ViewTasks } from './Components/ViewTasks';
import Routers from './Routers';
function App() {
  return (
    <div className="App">
     <Routers/>
    </div>
  );
}

export default App;
