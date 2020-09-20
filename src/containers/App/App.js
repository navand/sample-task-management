import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import { CssBaseline, AppBar, Toolbar, Paper, Stepper, Button, Typography, Modal } from '@material-ui/core';
import CreateTask from '../../components/CreateTask/CreateTask';
import _ from 'lodash';

const useStyles = makeStyles((theme) => ({
  appBar: {
    position: 'relative',
  },
  layout: {
    width: 'auto',
    marginLeft: theme.spacing(2),
    marginRight: theme.spacing(2),
    [theme.breakpoints.up(600 + theme.spacing(2) * 2)]: {
      width: 600,
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
}));

const App = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const [open, setOpen] = useState(false);

  const createTask = () => {
    setOpen(true);
  }

  const handleClose = () => {
    setOpen(false);
  }

  return (
    <React.Fragment>
      <CssBaseline />
      <AppBar position="absolute" color="default" className={classes.appBar}>
        <Toolbar>
          <Typography component="h1" variant="h4" align="center" className={classes.headerTitle}>
            Hello World
          </Typography>
        </Toolbar>
      </AppBar>
      <main className={classes.layout}>
        <Paper className={classes.paper}>
          <React.Fragment>
            <Button variant="contained" color="primary" className={classes.button} onClick={createTask}>
              Create Your First Task ;)
            </Button>
          </React.Fragment>
        </Paper>
      </main>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
        className={classes.modal}
      >
        <CreateTask />
      </Modal>
    </React.Fragment>
  );
};

export default App;
