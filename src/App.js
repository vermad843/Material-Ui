import React from 'react';
import logo from './logo.svg';
import './App.css';
import Button from "@material-ui/core/Button";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Button
            size = "large"
            variant="contained" 
            color = "secondary">
           <h2>Hello World</h2>
        </Button>
        <img src={logo} className="App-logo" alt="logo" />
      </header>
    </div>
  );
}

export default App;
