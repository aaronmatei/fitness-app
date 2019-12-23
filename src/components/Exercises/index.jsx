import React from 'react';
import { Grid } from '@material-ui/core';

import {
  Paper,
  makeStyles,
  Typography,
  ExpansionPanel,
  ExpansionPanelSummary,
  ExpansionPanelDetails
} from '@material-ui/core';

import { ExpandMore } from '@material-ui/icons';

const useStyles = makeStyles({
  Paper: {
    marginTop: 10,
    marginBottom: 10,
    padding: 20,
    height: 500,
    overflowY: 'auto'
  }
});

const Exercises = ({ exercises }) => {
  const classes = useStyles({});
  return (
    <Grid container>
      <Grid item sm>
        <Paper className={classes.Paper}>
          {exercises.map(([group, exercises]) => (
            <ExpansionPanel>
              <ExpansionPanelSummary
                expandIcon={<ExpandMore />}
                aria-controls='panel1a-content'
                id='panel1a-header'
              >
                <Typography
                  style={{ textTransform: 'capitalize' }}
                  variant='h4'
                >
                  {group}
                </Typography>
              </ExpansionPanelSummary>
              <ExpansionPanelDetails>
                {exercises.map((exercise, idx) => (
                  <Typography key={idx}>{exercise.title}</Typography>
                ))}
              </ExpansionPanelDetails>
            </ExpansionPanel>
          ))}
        </Paper>
      </Grid>
      <Grid item sm>
        <Paper className={classes.Paper}>
          <Typography variant='h4'>Welcome!</Typography>
          <Typography style={{ marginTop: 20 }}>
            Please select an exercise on the left to view details
          </Typography>
        </Paper>
      </Grid>
    </Grid>
  );
};

export default Exercises;
