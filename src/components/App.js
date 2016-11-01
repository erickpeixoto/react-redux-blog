import React, { Component } from 'react';
import logo from '../../public/images/logo.svg';
import '../../public/styles/App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Blog React Redux</h2>
        </div>
      </div>
    );
  }
}

export default App;
