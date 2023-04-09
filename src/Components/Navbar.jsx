import React from 'react';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  navLinks: {
    display: 'flex',
    flexDirection: 'row', // add this property
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
    padding: `${theme.spacing(2)}px ${theme.spacing(4)}px`,
    borderBottom: `1px solid ${theme.palette.grey[300]}`,
    backgroundColor: '#fff',
    zIndex: theme.zIndex.appBar + 1,
  },
  navLink: {
    margin: theme.spacing(1),
    textDecoration: 'none',
    color: theme.palette.primary.main,
    '&:hover': {
      textDecoration: 'none',
    },
    marginRight: theme.spacing(1),
  },
  link: {
    textDecoration: 'none',
    color: theme.palette.primary.main,
  },
}));

const Navbar = () => {
  const classes = useStyles();

  return (
    <div className={classes.navLinks}>
      <div>
        <Link to="/" className={classes.link}>
          <Typography variant="h4" fontFamily="Arial">NISH</Typography>
        </Link>
      </div>
      <div style={{ display: 'flex' }}>
        <Link to="/login" className={classes.navLink}>
          <Typography variant="subtitle1">Login</Typography>
        </Link>
        <Link to="/signup" className={classes.navLink}>
          <Typography variant="subtitle1" style={{ marginRight: '30px' }}>
            Sign up
          </Typography>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
