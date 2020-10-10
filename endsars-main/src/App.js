import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import './App.css';

import Home from './pages/home/Home'
import Politicians from './pages/politicians/Politicians'

function App() {
  return (
    <div className="App">
      <Router>
        <Route exact path='/' component={Home} />
        <Route exact path='/politicians' component={Politicians} />
      </Router>
    </div>
  );
}

export default App;
