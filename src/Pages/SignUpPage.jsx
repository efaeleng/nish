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

const SignUpPage = () => {
  const classes = useStyles();
  const navigate = useNavigate();

  const [role, setRole] = useState('jobSeeker');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [companyName, setCompanyName] = useState('');
  const [companySize, setCompanySize] = useState('');

  const handleRoleChange = (event) => {
    setRole(event.target.value);
  };

  const handleSignUp = (event) => {
    event.preventDefault();

    // Create user object
    const user = {
      email,
      password,
      role,
    };
    if (role === 'employer') {
      user.companyName = companyName;
      user.companySize = companySize;
    }

    // Save user object to local storage
    localStorage.setItem('user', JSON.stringify(user));

    // Redirect to login page
    navigate('/login');
  };

  return (
    <div>
      <Navbar isLoggedIn={isLoggedIn} username={username} handleLogout={handleLogout} />
      <div className={classes.container}>
      <div className={classes.form}>
        <Typography variant="h1" className={classes.title}>
          Sign Up
        </Typography>
        <form onSubmit={handleSignUp}>
          <TextField
            label="Email"
            variant="outlined"
            className={classes.input}
            fullWidth
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />
          <TextField
            label="Password"
            variant="outlined"
            type="password"
            className={classes.input}
            fullWidth
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          />
          <TextField
            label="Confirm Password"
            variant="outlined"
            type="password"
            className={classes.input}
            fullWidth
            value={confirmPassword}
            onChange={(event) => setConfirmPassword(event.target.value)}
          />
          <FormLabel component="legend" className={classes.radioGroup}>
            Sign up as a:
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
          {role === 'employer' && (
            <>
              <TextField
                label="Company Name"
                variant="outlined"
                className={classes.input}
                fullWidth
                value={companyName}
                onChange={(event) => setCompanyName(event.target.value)}
              />
              <TextField
                label="Company Size"
                variant="outlined"
                className={classes.input}
                fullWidth
                value={companySize}
                onChange={(event) => setCompanySize(event.target.value)}
              />
            </>
          )}
          <Button
            type="submit"
            variant="contained"
            color="primary"
            className={classes.button}
            fullWidth
          >
            Sign Up
          </Button>
        </form>
        <Typography variant="subtitle1">
          Already have an account?{' '}
          <Link to="/login" className={classes.link}>
            Login
          </Link>
        </Typography>
      </div>
    </div>
    </div>
  );
};

export default SignUpPage;
