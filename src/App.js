import logo from './logo.svg';
import React, { Component }  from 'react';
import './App.css';
import Router from './Router';
import Navbar from './components/Navbar';


class App extends Component {
  render() {
    return (
      <div className="App">
          <Router/>
      </div>
    );
  }
}

export default App;
