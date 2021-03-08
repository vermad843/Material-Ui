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
import 'fontsource-roboto';

import Typography from "@material-ui/core/Typography"
import Container from "@material-ui/core/Container"
import Paper from "@material-ui/core/Paper"
import Grid from "@material-ui/core/Grid"



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
  typography: {
    h2: {
      fontSize : 36,
    }
  },
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
    <Container maxWidth = "xs">
    <div className="App">
      <header className="App-header">
        <Typography variant="h2" component="div">
           welcome to MUI
        </Typography>
        <Typography variant="subtitle1">
           Learn how to use Material UI
        </Typography>
        <ButtonStyled/>
        {/* <TextField
           variant = "outlined"
           color = "secondary"
          //  type ="date"
           type = "email"
           label = "The Date"
           placeholder = "test@test.com"
        /> */}
        <Grid container spacing={2} justify="center">
          <Grid item>
             <Paper style={{height : 75, width: 50, }}/>
          </Grid>
          <Grid item>
             <Paper style={{height : 75, width: 50, }}/>
          </Grid>
           <Grid item>
             <Paper style={{height : 75, width: 50, }}/>
          </Grid>
        </Grid>
        

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
    </Container>
    </ThemeProvider>
  );
}

export default App;
