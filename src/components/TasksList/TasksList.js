import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import { Card, CardContent, Typography, Paper, Button, Grid } from '@material-ui/core';
import clsx from 'clsx';

const useStyles = makeStyles((theme) => ({
  paper: {
    width: '700px',
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(3),
    padding: theme.spacing(2),
    [theme.breakpoints.up(700 + theme.spacing(3) * 2)]: {
      marginTop: theme.spacing(6),
      marginBottom: theme.spacing(6),
      padding: theme.spacing(3),
    },
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  group: {
    '& > *': {
      margin: theme.spacing(1),
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
    float: 'inline-end',
  },
}));

const TasksList = (props) => {
  const classes = useStyles();

  const doneTask = () => {};

  return (
    <>
      {Object.keys(props.tasks).map((taskId, index) => (
        <Paper key={index} className={classes.paper}>
          <React.Fragment>
            <Grid container spacing={2}>
              <Grid item xs={6} style={{ textAlign: 'left' }}>
                <Typography gutterBottom variant="subtitle1">
                  {props.tasks[taskId].title}
                </Typography>
              </Grid>
              <Grid item xs={6} style={{ textAlign: 'right' }} className={classes.group}>
                <div className={clsx(classes[props.tasks[taskId].priority], classes.shapeCircle)} />
                <Typography variant="subtitle1">{props.tasks[taskId].priority}</Typography>
              </Grid>
              <Grid item xs={6} zeroMinWidth style={{ textAlign: 'left' }}>
                <Typography variant="body2" noWrap>
                  {props.tasks[taskId].description}
                </Typography>
              </Grid>
              <Grid
                item
                xs={6}
                style={{ textAlign: 'right' }}
                className={classes.group}
                justify="flex-end"
              >
                <Button variant="contained" color="primary" className={classes.button}>
                  Done Task
                </Button>
                <Button
                  variant="contained"
                  color="primary"
                  className={classes.button}
                  onClick={() => props.onEditTask(taskId, props.tasks[taskId])}
                >
                  Edit Task
                </Button>
              </Grid>
            </Grid>
          </React.Fragment>
        </Paper>
      ))}
    </>
  );
};

TasksList.propTypes = {
  tasks: PropTypes.object,
  onEditTask: PropTypes.func,
};

export default TasksList;
