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

import { makeStyles , ThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import { green ,orange } from "@material-ui/core/colors";


const useStyles = makeStyles({
  root : {
    background : 'linear-gradient(45deg, #FE6888, #FF8E53)',
    border : 0,
    marginBottom : 15,
    borderRadius: 15,
    color : 'white',
    padding : '5px 30px'
  }
})

function ButtonStyled() {
  const classes = useStyles();
  return <Button className={classes.root}>Test Styled</Button>
}

const theme = createMuiTheme({
  palette : {
    primary : {
      main : green[400],
    },
    secondary : {
       main : orange[400],
    }
  }
})


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
    <ThemeProvider theme = {theme}>
    <div className="App">
      <header className="App-header">
        <ButtonStyled/>
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
    </ThemeProvider>
  );
}

export default App;
