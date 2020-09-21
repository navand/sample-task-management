import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import { Typography, Paper } from '@material-ui/core';
import TasksList from '../../components/TasksList/TasksList';

const useStyles = makeStyles((theme) => ({
  paper: {
    width: '760px',
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(3),
    padding: theme.spacing(2),
    [theme.breakpoints.up(600 + theme.spacing(3) * 2)]: {
      marginTop: theme.spacing(6),
      marginBottom: theme.spacing(6),
      padding: theme.spacing(3),
    },
  },
  headerTitle: {
    margin: '0 auto',
  },
}));

const DoneTasks = (props) => {
  const classes = useStyles();

  return (
    <Paper className={classes.paper}>
      <Typography component="h1" variant="h4" align="center" className={classes.headerTitle}>
        Done Task
      </Typography>
      <TasksList tasks={props.tasks} doneTasks={true} />
    </Paper>
  );
};

DoneTasks.propTypes = {
  tasks: PropTypes.object,
};

export default DoneTasks;
