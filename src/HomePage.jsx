import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import { Button, Typography } from '@material-ui/core';
import Navbar from './Components/Navbar';

const useStyles = makeStyles((theme) => ({
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh',
    overflow: 'hidden',
  },
  header: {
    textAlign: 'center',
    marginBottom: theme.spacing(4),
  },
  title: {
    fontSize: '3rem',
    fontWeight: 500,
    color: '#3f3d56',
    marginBottom: theme.spacing(2),
  },
  subtitle: {
    fontSize: '1.5rem',
    color: '#656565',
  },
  button: {
    margin: theme.spacing(1),
  },
  link: {
    textDecoration: 'none',
    color: theme.palette.primary.main,
  },
}));

const HomePage = () => {
  const classes = useStyles();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState('');

  useEffect(() => {
    const storedUsername = localStorage.getItem('username');
    if (storedUsername) {
      setIsLoggedIn(true);
      setUsername(storedUsername);
    }
  }, []);

  const handleLogin = () => {
    setIsLoggedIn(true);
    const username = 'user@example.com'; // Replace with the actual username or email of the logged-in user
    localStorage.setItem('username', username);
    setUsername(username);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    localStorage.removeItem('username');
    setUsername('');
  };

  return (
    <div>
      <Navbar isLoggedIn={isLoggedIn} username={username} handleLogout={handleLogout} />
      <div className={classes.container}>
        <div className={classes.header}>
          <Typography variant="h1" className={classes.title}>
            Welcome to NISH
          </Typography>
          <Typography variant="subtitle1" className={classes.subtitle}>
            Connecting Job Seekers to Opportunities...
          </Typography>
        </div>
        <div>
          <Button
            component={Link}
            to="/jobs"
            variant="contained"
            color="primary"
            size="large"
            className={classes.button}
          >
            View Jobs
          </Button>
          <Button
            component={Link}
            to="/post-job"
            variant="outlined"
            color="primary"
            size="large"
            className={classes.button}
          >
            Post a Job
          </Button>
          
        </div>
      </div>
    </div>
  );
};

export default HomePage;
