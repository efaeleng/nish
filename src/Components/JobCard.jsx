import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
  card: {
    display: 'flex',
    justifyContent: 'space-between',
    margin: theme.spacing(2),
    padding: theme.spacing(2),
    backgroundColor: '#F5F5F5',
    boxShadow: theme.shadows[3],
    borderRadius: theme.shape.borderRadius,
    height: '100px',
    width: '650px'
  },
  jobTitle: {
    fontWeight: 'bold',
    marginBottom: theme.spacing(1),
  },
  jobDescription: {
    color: theme.palette.text.secondary,
  },
  button: {
    alignSelf: 'flex-end',
  }
}));

function JobCard({ job }) {
  const classes = useStyles();

  return (
    <Card className={classes.card}>
      <CardContent>
        <Typography variant="h5" className={classes.jobTitle}>
          {job.title}
        </Typography>
        <Typography variant="body2" className={classes.jobDescription}>
          {job.description}
        </Typography>
      </CardContent>
      <CardContent>
        <Typography variant="body2" color="textSecondary">
          {job.role}
        </Typography>
        <Typography variant="body2" color="textSecondary">
          {job.location}
        </Typography>
        <Button variant="contained" color="primary" className={classes.button}>
          Apply for Job
        </Button>
      </CardContent>
    </Card>
  );
}

export default JobCard;
