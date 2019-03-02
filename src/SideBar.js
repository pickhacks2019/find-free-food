import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import FoodCard from './FoodCard';

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
    overflowY: 'scroll',
    overflowX: 'hidden',
    alignItems: 'center',
    textAlign: 'center',
    justifyContent: 'center',
    margin: 'auto',
  },
  grid: {
    height: '100vh',
    width: '95%',
  },
  card: {
    marginTop: 10, 
    paddingBottom: 10,
    margin: 'auto',
  },
});

function CenteredGrid(props) {
  const { classes } = props;

  return (
    <div className={classes.root}>
      <Grid className={classes.grid} container spacing={24}>
        <Grid className={classes.card} item xs={11}>
          <FoodCard />
        </Grid>
        <Grid className={classes.card} item xs={11}>
          <FoodCard />
        </Grid>
        <Grid className={classes.card} item xs={11}>
          <FoodCard />
        </Grid>
        <Grid className={classes.card} item xs={11}>
          <FoodCard />
        </Grid>
      </Grid>
    </div>
  );
}

CenteredGrid.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(CenteredGrid);
