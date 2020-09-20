import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import {
  Grid,
  TextField,
  Paper,
  FormControlLabel,
  RadioGroup,
  Radio,
  Button,
} from '@material-ui/core';
import { FixedSizeList } from 'react-window';

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
}));

const renderTask = (props) => {
  const { index, style } = props;

  return (
    <ListItem button style={style} key={index}>
      <ListItemText primary={`Item ${index + 1}`} />
    </ListItem>
  );
};

renderTask.propTypes = {
  index: PropTypes.number.isRequired,
  style: PropTypes.object.isRequired,
};

const TasksList = () => {
  const classes = useStyles();
  const tasks = useSelector((state) => state.task.tasks);

  return (
    <Paper className={classes.paper}>
      <React.Fragment>
        <FixedSizeList height={400} width={300} itemSize={46} itemCount={200}>
          {renderTask}
        </FixedSizeList>
      </React.Fragment>
    </Paper>
  );
};

export default TasksList;
