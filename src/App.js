import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import ButtonGroup from "@material-ui/core/ButtonGroup";
import Button from "@material-ui/core/Button";
import SaveIcon from "@material-ui/icons/Save";
import DeleteIcon from "@material-ui/icons/Delete";
import Checkbox from "@material-ui/core/Checkbox";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import TextField from "@material-ui/core/TextField";


function CheckboxExample() {
  const [checked, setChecked] = React.useState(true)
  return (
    <FormControlLabel
       control = {
         <Checkbox
           checked = {checked}
           onChange = {(e) => setChecked(e.target.checked)}
           inputProps = {{
             'aria-label' : 'secondary checkbox'
           }}
         />}
         label = "Testing Checkbox"
    />
  )
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <TextField
           variant = "outlined"
           color = "secondary"
          //  type ="date"
           type = "email"
           label = "The Date"
           placeholder = "test@test.com"
        />
        <CheckboxExample/>
        <ButtonGroup variant = "contained" color="primary">
           <Button
               startIcon = {<SaveIcon/>}
              >
              <h2>Save</h2>
           </Button>
           <Button
               startIcon = {<DeleteIcon/>}
              >
              <h2>Discard</h2>
           </Button>
        </ButtonGroup>
        <img src={logo} className="App-logo" alt="logo" />
      </header>
    </div>
  );
}

export default App;
