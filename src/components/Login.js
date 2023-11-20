
/*import React from 'react'
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from "axios"

// mui imports
import {Avatar,Button, CssBaseline, TextField, Link, Paper, Box, Grid, Typography, } from '@mui/material';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import { createTheme, ThemeProvider } from '@mui/material/styles';

// copyright
function Copyright(props) {
    return (
      <Typography variant="body2" color="text.secondary" align="center" {...props}>
        {'Copyright © '}
        <Link color="inherit">
          THE TIMES OF INDIA
        </Link>{' '}
        {new Date().getFullYear()}
        {'.'}
      </Typography>
    );
}
  
const defaultTheme = createTheme();

function Login() {
    const baseURL = 'http://localhost:4000';

// using the store to save and get logger details.
    const [logger,setLogger]=useState()

    const navigate=useNavigate();
    const [users,setUsers]=useState([])

// to fetch data from JSON server using Axios
  useEffect(()=>{
      const fetchUsers=async ()=>{
          try{
            const response = await axios.get(`${baseURL}/users`);
              if(response && response.data) setUsers(response.data)
          }
          catch{
              console.log("error")
          }
      }
      fetchUsers();
  },[])
console.log('json server working',users);

// on submitting login data, comparing with database
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const obj={
        email:data.get('email'),
        password:data.get('password')
    }
    setLogger(obj);

    // logic to validate the user

    var flag=false
    users.forEach((user)=>{
        if(user.email===obj.email && user.password===obj.password){
            flag=true
            navigate('/')
        }
    })
    if(!flag){
        alert("Enter correct details or Sign-up")
        navigate('/login')
    }
};

return (
    <ThemeProvider theme={defaultTheme}>
      <Grid container component="main" sx={{ height: '100vh'}}>
        <CssBaseline />
        <Grid
          item
          xs={false}
          sm={4}
          md={6}
          sx={{
            backgroundImage: 'url(https://source.unsplash.com/random?wallpapers)',
            backgroundRepeat: 'no-repeat',
            backgroundColor: (t) =>
              t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900],
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        <Grid item xs={12} sm={8} md={6} component={Paper} elevation={6} square>
          <Box
            sx={{
              my: 8,
              mx: 4,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <Avatar sx={{ m: 4, bgcolor: 'secondary.main' }}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Sign in to
            </Typography>
            <Grid xs={6} sx={{color:'red'}}>
            <Typography component="h1" variant="h5" mt={1}>
              THE TIMES OF INDIA
            </Typography>
            </Grid>
            
            <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 4 }}>
              <TextField
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                autoFocus
              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
              />

              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                SIGN IN
              </Button>
              <Grid container>
                <Grid item xs>
                  <Link href="#" variant="body2">
                    Forgot password?
                  </Link>
                </Grid>
                <Grid item>
                  <Link variant="body2" component="button" onClick={()=>navigate('/register')} >
                    {"Don't have an account? Sign Up"}
                  </Link>
                </Grid>
              </Grid>
              <Copyright sx={{ mt: 5 }} />
            </Box>
          </Box>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}

export default Login
*/


import React, { useState } from 'react';
import { Button } from '@mui/material';
import { Card } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';
import classes from './login.module.css';

const Login = (props) => {
  const navigate = useNavigate();

  const [enteredEmail, setEnteredEmail] = useState('');
  const [enteredPassword, setEnteredPassword] = useState('');
  const [formIsValid, setFormIsValid] = useState(false);

  const submitHandler = (event) => {
    event.preventDefault();
    props.onLogin(enteredEmail, enteredPassword);

    // Redirect to home page after successful login
    navigate('/');
  };

  const emailChangeHandler = (event) => {
    setEnteredEmail(event.target.value);
    validateForm();
  };

  const passwordChangeHandler = (event) => {
    setEnteredPassword(event.target.value);
    validateForm();
  };

  const validateForm = () => {
    setFormIsValid(enteredEmail.includes('@') && enteredPassword.trim().length > 6);
  };

  return (
    <div className={classes.loginContainer}>
      <Card className={classes.login}>
        <form onSubmit={submitHandler}>
          <div className={`${classes.control}`}>
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              value={enteredEmail}
              onChange={emailChangeHandler}
            />
          </div>
          <div className={`${classes.control}`}>
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              id="password"
              value={enteredPassword}
              onChange={passwordChangeHandler}
            />
          </div>
          <div className={classes.actions}>
            <Button type="submit" className={classes.btn} disabled={!formIsValid}>
              Login
            </Button>
          </div>
          <p>
            Don't have an account?{' '}
            <Link to="/signup" className={classes.signupLink}>
              Sign up
            </Link>
          </p>
        </form>
      </Card>
    </div>
  );
};

export default Login;



     
          