import React from 'react';
import './App.css';
import Home from './components/templates/Home';
import Dashboard from './components/templates/Dashboard';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (

    <Router>
      <Routes>
        <Route path="/" Component={Home} />
        <Route path="/dashboard/:ucid" Component={Dashboard}/>
      </Routes>
    </Router>
  );
}

export default App;
