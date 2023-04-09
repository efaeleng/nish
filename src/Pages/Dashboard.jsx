import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
// import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import JobCard from '../Components/JobCard';
import Navbar from '../Components/Navbar';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
  searchContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: theme.spacing(3),
  },
  searchField: {
    width: 400,
  },
}));

const jobs = [
  {
    id: 1,
    role: 'Software Engineer',
    company: 'Google',
    location: 'Mountain View, CA',
    description: 'We are looking for a software engineer to join our team.',
  },
  {
    id: 2,
    role: 'Data Scientist',
    company: 'Facebook',
    location: 'Menlo Park, CA',
    description: 'We are looking for a data scientist to join our team.',
  },
  {
    id: 3,
    role: 'Product Manager',
    company: 'Amazon',
    location: 'Seattle, WA',
    description: 'We are looking for a product manager to join our team.',
  },
  {
    id: 4,
    role: 'Software Enginner',
    company: 'Amazon',
    location: 'Seattle, WA',
    description: 'We are looking for a Software manager to join our team.',
  },
  // add more jobs here
];

const Dashboard = () => {
  const classes = useStyles();
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const filteredJobs = jobs.filter((job) =>
    job.role.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div>
      <Navbar isLoggedIn={isLoggedIn} username={username} handleLogout={handleLogout} />
      <div className={classes.root}>
      <div className={classes.searchContainer}>
        <TextField
          className={classes.searchField}
          label="Search jobs by role"
          value={searchQuery}
          onChange={handleSearchChange}
          variant="outlined"
        />
      </div>
      <Grid container spacing={3}>
        {filteredJobs.map((job) => (
          <Grid key={job.id} item xs={12} sm={6}>
            <JobCard job={job} />
          </Grid>
        ))}
      </Grid>
    </div>
    </div>
  );
};

export default Dashboard;
