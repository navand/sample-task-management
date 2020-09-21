import React, { useState, useRef } from 'react';
import { useSelector } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import {
  CssBaseline,
  AppBar,
  Toolbar,
  Paper,
  Button,
  Typography,
  Modal,
  Fab,
} from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import CreateTask from '../../components/CreateTask/CreateTask';
import TasksList from '../../components/TasksList/TasksList';
import DoneTasks from '../../components/DoneTasks/DoneTasks';

const useStyles = makeStyles((theme) => ({
  appBar: {
    position: 'relative',
  },
  layout: {
    width: 'auto',
    marginLeft: theme.spacing(2),
    marginRight: theme.spacing(2),
    [theme.breakpoints.up(600 + theme.spacing(2) * 2)]: {
      width: 800,
      marginLeft: 'auto',
      marginRight: 'auto',
    },
  },
  paper: {
    textAlign: 'center',
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(3),
    padding: theme.spacing(2),
    [theme.breakpoints.up(600 + theme.spacing(3) * 2)]: {
      marginTop: theme.spacing(6),
      marginBottom: theme.spacing(6),
      padding: theme.spacing(3),
    },
    paddingBottom: 40,
  },
  stepper: {
    padding: theme.spacing(3, 0, 5),
  },
  buttons: {
    display: 'flex',
    justifyContent: 'flex-end',
  },
  button: {
    marginTop: theme.spacing(3),
    marginLeft: theme.spacing(1),
  },
  headerTitle: {
    margin: '0 auto',
  },
  centerButton: {
    margin: '0 auto',
  },
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  circleButton: {
    float: 'right',
    marginTop: '-38px',
  },
}));

const App = () => {
  const classes = useStyles();
  const tasks = useSelector((state) => state.task.tasks);
  const doneTasks = useSelector((state) => state.task.doneTasks);
  const [open, setOpen] = useState(false);
  const editMode = useRef(false);
  const selectedTaskId = useRef(0);
  const selectedTask = useRef({});
  const showDoneTasks = useRef(false);

  const createTask = () => {
    editMode.current = false;
    showDoneTasks.current = false;
    setOpen(true);
  };

  const showDoneTask = () => {
    showDoneTasks.current = true;
    setOpen(true);
  };

  const onEditTask = (e, taskId, task) => {
    e.stopPropagation();
    editMode.current = true;
    selectedTaskId.current = taskId;
    selectedTask.current = task;
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <React.Fragment>
      <CssBaseline />
      <AppBar position="absolute" color="default" className={classes.appBar}>
        <Toolbar>
          {Object.keys(doneTasks).length > 0 ? (
            <Button
              variant="contained"
              color="primary"
              onClick={showDoneTask}
              style={{ position: 'absolute' }}
            >
              View Done Tasks
            </Button>
          ) : null}
          <Typography component="h1" variant="h4" align="center" className={classes.headerTitle}>
            Hello World
          </Typography>
        </Toolbar>
      </AppBar>
      <main className={classes.layout}>
        <Paper className={classes.paper}>
          {Object.keys(tasks).length > 0 ? (
            <>
              <TasksList tasks={tasks} doneTasks={false} onEditTask={onEditTask} />
              <Fab
                color="primary"
                aria-label="add"
                className={classes.circleButton}
                onClick={createTask}
              >
                <AddIcon />
              </Fab>
            </>
          ) : (
            <React.Fragment>
              <Button
                variant="contained"
                color="primary"
                className={classes.button}
                onClick={createTask}
              >
                Create Your First Task ;)
              </Button>
            </React.Fragment>
          )}
        </Paper>
      </main>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
        className={classes.modal}
      >
        {showDoneTasks.current ? (
          <DoneTasks tasks={doneTasks} />
        ) : (
          <CreateTask
            close={handleClose}
            editMode={editMode.current}
            taskId={selectedTaskId.current}
            task={selectedTask.current}
          />
        )}
      </Modal>
    </React.Fragment>
  );
};

export default App;
