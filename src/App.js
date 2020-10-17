import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import './App.css';

import Home from './pages/home/Home'
import Politicians from './pages/politicians/Politicians'
import Complaint from './pages/complaint/Complaint'


function App() {
  return (
    <div className="App">
      <Router>
        <Route exact path='/' component={Home} />
        <Route exact path='/politicians' component={Politicians} />
        <Route exact path='/complaint' component={Complaint} />
      </Router>
    </div>
  );
}

export default App;
