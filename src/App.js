import React from 'react';
import logo from './logo.svg';
import './App.css';
import {HashRouter as Router, Switch, Route} from 'react-router-dom'
import Header from './Components/Header'
import router from './router'

function App() {
  return (
    <div className="App">
      <Header/>
      <Router>
        <div>
          {router}
        </div>
      </Router>
    </div>
  );
}

export default App;
