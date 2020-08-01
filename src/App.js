import React from 'react';
import logo from './logo.svg';
import './App.css';
import Login from './components/Login';
import Logout from './components/Logout';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>Google Auth ReactJS</p>
        <Login/>
        <Logout/>
      </header>
    </div>
  );
}

export default App;
