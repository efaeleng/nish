import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';

import Navbar from '../Components/Navbar';
import {
  Button,
  TextField,
  Typography,
  Radio,
  RadioGroup,
  FormControlLabel,
  FormLabel,
} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
    padding: theme.spacing(4),
    borderRadius: theme.spacing(1),
    boxShadow: theme.shadows[3],
  },
  title: {
    fontSize: '2rem',
    fontWeight: 500,
    color: '#3f3d56',
    marginBottom: theme.spacing(2),
  },
  input: {
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(2),
  },
  radioGroup: {
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(2),
  },
  button: {
    marginTop: theme.spacing(2),
  },
  link: {
    textDecoration: 'none',
    color: theme.palette.primary.main,
  },
}));

const LoginPage = () => {
  const classes = useStyles();
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('jobSeeker');
  const [error, setError] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleRoleChange = (event) => {
    setRole(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();


    const user = {
      email,
      password,
      role
    };
    // Get the stored user data from local storage
    // const storedUserData = localStorage.getItem(`${role}-${email}`);
    const storedUserData = localStorage.getItem('user');
    if (storedUserData) {
      // Parse the stored user data
      const userData = JSON.parse(storedUserData);
      // Check if the password matches the stored password
      if (password === userData.password) {
        // Store the logged in user data in local storage
        localStorage.setItem('user', JSON.stringify({ email, role }));
        // localStorage.setItem('loggedInUser', JSON.stringify({ email, role }));
        // Set the isLoggedIn state to true
        setIsLoggedIn(true);
        // Show a toast message for successful login
        window.alert('Login successful');
        // Redirect the user to the dashboard page
        navigate('/dashboard');
      } else {
        setError('Invalid password');
      }
    } else {
      setError(`No ${role} account found with email ${email}`);
    }
  };

  // Check if user is already logged in
  if (isLoggedIn) {
    navigate('/dashboard');
  }

  return (
    <div>
      <Navbar />
      {/* <Navbar isLoggedIn={isLoggedIn} username={username} handleLogout={handleLogout} /> */}
      <div className={classes.container}>
      <div className={classes.form}>
        <Typography variant="h1" className={classes.title}>
          {isLoggedIn ? `${username}` : 'Log In'}
        </Typography>
        <form onSubmit={handleSubmit}>
          <TextField
            label="Email"
            variant="outlined"
            className={classes.input}
            fullWidth
            value={email}
            onChange={handleEmailChange}
          />
          <TextField
            label="Password"
            variant="outlined"
            type="password"
            className={classes.input}
            fullWidth
            value={password}
            onChange={handlePasswordChange}
          />
          <FormLabel component="legend" className={classes.input}>
            Select Role
          </FormLabel>
          <RadioGroup
            aria-label="role"
            name="role"
            value={role}
            onChange={handleRoleChange}
            className={classes.radioGroup}
          >
            <FormControlLabel
              value="jobSeeker"
              control={<Radio />}
              label="Job Seeker"
            />
            <FormControlLabel
              value="employer"
              control={<Radio />}
              label="Employer"
            />
          </RadioGroup>
          {error && (
            <Typography variant="subtitle2" color="error">
              {error}
            </Typography>
          )}
          <Button
            type="submit"
            variant="contained"
            color="primary"
            className={classes.button}
            fullWidth
          >
            Log In
          </Button>
          <Link to="/signup" className={classes.link}>
            <Typography variant="subtitle2" className={classes.input}>
              Don't have an account? Sign Up.
            </Typography>
          </Link>
        </form>
      </div>
    </div>
    </div>
    
  );
};

export default LoginPage;
