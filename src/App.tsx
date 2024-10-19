import React from 'react';
import './App.css';
import Home from './components/pages/Home';
import Dashboard from './components/pages/Dashboard';
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
