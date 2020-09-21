import React, { useState, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import { Modal, Typography, Paper, Button, Grid } from '@material-ui/core';
import { taskActions } from '../../actions';
import TaskDetails from '../TaskDetails/TaskDetails';
import clsx from 'clsx';

const useStyles = makeStyles((theme) => ({
  layout: {
    width: 'auto',
    marginLeft: theme.spacing(2),
    marginRight: theme.spacing(2),
    [theme.breakpoints.up(700 + theme.spacing(2) * 2)]: {
      marginLeft: 'auto',
      marginRight: 'auto',
    },
    overflowY: 'auto',
    maxHeight: 500,
    marginBottom: 48,
  },
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
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
}));

const TasksList = (props) => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const [open, setOpen] = useState(false);
  const selectedTaskId = useRef(0);
  const selectedTask = useRef({});

  const doneTask = (e, taskId) => {
    e.stopPropagation();
    setOpen(false);
    dispatch(taskActions.done(taskId));
  };

  const showTaskDetails = (taskId, task) => {
    if (!props.doneTasks) {
      selectedTaskId.current = taskId;
      selectedTask.current = task;
      setOpen(true);
    }
  };

  const handleClose = () => {
    setOpen(false);
  };

  const onEditTask = (e) => {
    setOpen(false);
    props.onEditTask(e, selectedTaskId.current, selectedTask.current);
  };

  const onDeleteTask = () => {
    setOpen(false);
    dispatch(taskActions._delete(selectedTaskId.current));
  };

  return (
    <main className={classes.layout}>
      {Object.keys(props.tasks).map((taskId, index) => (
        <Paper
          key={index}
          className={classes.paper}
          onClick={() => showTaskDetails(taskId, props.tasks[taskId])}
        >
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
              {!props.doneTasks ? (
                <Grid
                  item
                  xs={6}
                  style={{ textAlign: 'right' }}
                  className={classes.group}
                  justify="flex-end"
                >
                  <Button
                    variant="contained"
                    color="primary"
                    className={classes.button}
                    onClick={(e) => doneTask(e, taskId)}
                  >
                    Done Task
                  </Button>
                  <Button
                    variant="contained"
                    color="primary"
                    className={classes.button}
                    onClick={(e) => props.onEditTask(e, taskId, props.tasks[taskId])}
                  >
                    Edit Task
                  </Button>
                </Grid>
              ) : null}
            </Grid>
          </React.Fragment>
        </Paper>
      ))}
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
        className={classes.modal}
      >
        <TaskDetails
          task={selectedTask.current}
          editTask={onEditTask}
          doneTask={(e) => doneTask(e, selectedTaskId.current)}
          deleteTask={onDeleteTask}
        />
      </Modal>
    </main>
  );
};

TasksList.propTypes = {
  tasks: PropTypes.object,
  onEditTask: PropTypes.func,
  doneTasks: PropTypes.bool,
};

export default TasksList;
