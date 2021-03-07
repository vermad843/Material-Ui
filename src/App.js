import React from 'react';
import logo from './logo.svg';
import './App.css';
import ButtonGroup from "@material-ui/core/ButtonGroup";
import Button from "@material-ui/core/Button";
import SaveIcon from "@material-ui/icons/Save";
import DeleteIcon from "@material-ui/icons/Delete";


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <ButtonGroup>
           <Button
               startIcon = {<SaveIcon/>}
              //  endIcon = {<SaveIcon/>}
               size = "large"
               variant="contained" 
               color = "primary">
              <h2>Save</h2>
           </Button>
           <Button
               startIcon = {<DeleteIcon/>}
              //  endIcon = {<SaveIcon/>}
               size = "large"
               variant="contained" 
               color = "secondary">
              <h2>Discard</h2>
           </Button>
        </ButtonGroup>
        <img src={logo} className="App-logo" alt="logo" />
      </header>
    </div>
  );
}

export default App;
