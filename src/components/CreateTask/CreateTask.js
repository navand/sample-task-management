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
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { taskActions } from '../../actions';
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
}));

const CreateTask = (props) => {
  const dispatch = useDispatch();
  const classes = useStyles();

  const TaskSchema = Yup.object().shape({
    title: Yup.string().required('Task title required'),
    description: Yup.string().required('Task description required'),
    gifts: Yup.string().required('Gifts and KPI required'),
    priority: Yup.string().required('Priority required'),
  });

  const formik = useFormik({
    initialValues: { title: '', description: '', gifts: '', priority: 'Low' },
    validationSchema: TaskSchema,
    onSubmit: (values) => {
      dispatch(taskActions.create(values));
      props.close();
    },
  });

  return (
    <Paper className={classes.paper}>
      <React.Fragment>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <TextField
              id="title"
              name="title"
              label="Task Title"
              fullWidth
              error={_.has(formik.touched, 'title') && _.has(formik.errors, 'title')}
              helperText={_.has(formik.touched, 'title') ? _.get(formik.errors, 'title') : ''}
              value={formik.values.title}
              onChange={formik.handleChange}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              id="description"
              name="description"
              label="Task Description"
              fullWidth
              multiline
              error={_.has(formik.touched, 'description') && _.has(formik.errors, 'description')}
              helperText={
                _.has(formik.touched, 'description') ? _.get(formik.errors, 'description') : ''
              }
              value={formik.values.description}
              onChange={formik.handleChange}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              id="gifts"
              name="gifts"
              label="Gifts and KPI for this task ;)"
              fullWidth
              error={_.has(formik.touched, 'gifts') && _.has(formik.errors, 'gifts')}
              helperText={_.has(formik.touched, 'gifts') ? _.get(formik.errors, 'gifts') : ''}
              value={formik.values.gifts}
              onChange={formik.handleChange}
            />
          </Grid>
          <Grid item xs={12}>
            <RadioGroup
              row
              aria-label="priority"
              name="priority"
              value={formik.values.priority}
              onChange={formik.handleChange}
            >
              <FormControlLabel value="Low" control={<Radio />} label="Low" />
              <FormControlLabel value="Medium" control={<Radio />} label="Medium" />
              <FormControlLabel value="High" control={<Radio />} label="High" />
            </RadioGroup>
          </Grid>
          <Grid item xs={12} style={{ textAlign: 'center' }}>
            <Button variant="contained" color="primary" onClick={formik.handleSubmit}>
              Add To Tasks
            </Button>
          </Grid>
        </Grid>
      </React.Fragment>
    </Paper>
  );
};

CreateTask.propTypes = {
  close: PropTypes.func,
};

export default CreateTask;
