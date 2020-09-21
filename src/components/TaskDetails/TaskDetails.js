import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import {
  Grid,
  Typography,
  Paper,
  FormControlLabel,
  RadioGroup,
  Radio,
  Button,
} from '@material-ui/core';
import clsx from 'clsx';
import _ from 'lodash';

const useStyles = makeStyles((theme) => ({
  paper: {
    width: '500px',
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(3),
    padding: theme.spacing(2),
    [theme.breakpoints.up(600 + theme.spacing(3) * 2)]: {
      marginTop: theme.spacing(6),
      marginBottom: theme.spacing(6),
      padding: theme.spacing(3),
    },
  },
  High: {
    backgroundColor: 'red',
  },
  Low: {
    backgroundColor: 'green',
  },
  Medium: {
    backgroundColor: 'yellow',
  },
  shapeCircle: {
    borderRadius: '50%',
    width: 40,
    height: 40,
    float: 'left',
  },
}));

const TaskDetails = (props) => {
  const classes = useStyles();

  return (
    <Paper className={classes.paper}>
      <Grid container direction="column" spacing={3}>
        <Grid item container spacing={3}>
          <Grid item xs>
            <div className={clsx(classes[props.task.priority], classes.shapeCircle)} />
            <Typography variant="subtitle1" style={{ marginLeft: 50, marginTop: 7 }}>
              {props.task.priority}
            </Typography>
          </Grid>
          <Grid item xs={6}>
            <Typography variant="subtitle1" style={{ textAlign: 'center' }}>
              {props.task.title}
            </Typography>
          </Grid>
          <Grid item xs></Grid>
        </Grid>
        <Grid item container spacing={1}>
          <Grid item xs></Grid>
          <Grid item xs={8}>
            <Typography variant="body2" style={{ textAlign: 'justify' }}>
              {props.task.description}
            </Typography>
          </Grid>
          <Grid item xs></Grid>
        </Grid>
        <Grid item container spacing={2}>
          <Grid item xs>
            <Button
              variant="contained"
              color="primary"
              className={classes.button}
              onClick={props.editTask}
            >
              Edit Task
            </Button>
          </Grid>
          <Grid item xs>
            <Button
              variant="contained"
              color="primary"
              className={classes.button}
              onClick={props.doneTask}
            >
              Done Task
            </Button>
          </Grid>
          <Grid item xs>
            <Button
              variant="contained"
              color="primary"
              className={classes.button}
              onClick={props.deleteTask}
            >
              Delete Task
            </Button>
          </Grid>
        </Grid>
      </Grid>
    </Paper>
  );
};

TaskDetails.propTypes = {
  task: PropTypes.object,
  editTask: PropTypes.func,
  doneTask: PropTypes.func,
  deleteTask: PropTypes.func,
};

export default TaskDetails;
