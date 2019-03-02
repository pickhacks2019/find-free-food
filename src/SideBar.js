import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Card from './Card';

const styles = theme => ({
  root: {
    flexGrow: 1,
    height: '100vh',
    width: '30%',
    backgroundColor: 'lightgray',
    display: 'flex',
    position: 'absolute',
    right: 0,
    flex: 1,
    alignItems: 'center',
    textAlign: 'center',
    overflowY: 'scroll',
    overflowX: 'hidden',
  },
  grid: {
    height: '100vh',
  },
  card: {
    marginTop: 10, 
    marginLeft: 20,
    marginRight: 20,
    paddingBottom: 10,
  },
});

function CenteredGrid(props) {
  const { classes } = props;

  return (
    <div className={classes.root}>
      <Grid className={classes.grid} container spacing={20}>
        <Grid className={classes.card} item xs={11}>
          <Card />
        </Grid>
        <Grid className={classes.card} item xs={11}>
          <Card />
        </Grid>
        <Grid className={classes.card} item xs={11}>
          <Card />
        </Grid>
        <Grid className={classes.card} item xs={11}>
          <Card />
        </Grid>
      </Grid>
    </div>
  );
}

CenteredGrid.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(CenteredGrid);
