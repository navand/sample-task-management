import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Grid, TextField, Paper, FormControlLabel, RadioGroup, Radio, Button } from '@material-ui/core';

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
const CreateTask = () => {
    const classes = useStyles();

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
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            id="description"
                            name="description"
                            label="Task Description"
                            fullWidth
                            multiline
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            id="gifts"
                            name="gifts"
                            label="Gifts and KPI for this task ;)"
                            fullWidth
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <RadioGroup row aria-label="priority" name="priority">
                            <FormControlLabel value="Low" control={<Radio />} label="Low" />
                            <FormControlLabel value="Medium" control={<Radio />} label="Medium" />
                            <FormControlLabel value="High" control={<Radio />} label="High" />
                        </RadioGroup>
                    </Grid>
                    <Grid item xs={12} style={{textAlign: 'center'}}>
                        <Button variant="contained" color="primary">
                            Add To Tasks
                        </Button>
                    </Grid>
                </Grid>
            </React.Fragment>
        </Paper>
    );
}

export default CreateTask;