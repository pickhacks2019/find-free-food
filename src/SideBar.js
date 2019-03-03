import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import FoodCard from './FoodCard';
import ActionBar from './ActionBar';

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
    display: 'block',
    paddingTop: 80,
  },
  actionBar: {
    width: '100%',
    display: 'block',
    position: 'absolute',
    top: 0,
  },
  card: {
    marginTop: 10,
    paddingBottom: 10,
    margin: 'auto',
  },
});

function CenteredGrid(props) {
  const { classes, onCardClick, showInfo } = props;

  return (
    <div className={classes.root}>
      <Grid key={-1} className={classes.actionBar} style={{ maxWidth: '100%' }} item xs={11}>
        <ActionBar />
      </Grid>
      <Grid className={classes.grid} container spacing={24}>
        {props.foodData.map(datum => {
          return (
            <Grid key={datum.key} className={classes.card} item xs={11}>
              <FoodCard
                foodType={datum.food}
                entryKey={datum.key}
                onCardClick={onCardClick}
                showInfo={showInfo}
              />
            </Grid>
          );
        })}
      </Grid>
    </div>
  );
}

CenteredGrid.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(CenteredGrid);
