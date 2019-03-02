import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const styles = {
  card: {
    maxWidth: 345,
    display: 'list',
  },
  media: {
    height: 140,
  },
};

function FoodCard(props) {
  const { classes, food_type } = props;
  
  function get_image(food_type) {
    switch(food_type) {
      case "Pizza":
        return 'images/alex.jpg';
      
      case "Lee's Chicken":
        return 'images/lees.jpg';
      
      case "Bread Co.":
        return 'images/bread.jpg';
      
      case "Lizard":
        return 'images/liz.jpg';
    }
  }

  function get_description(food_type) {
    switch(food_type) {
      case "Pizza":
        return "You better BELIEVE it 🍕🍕🍕🍕🍕";
      
      case "Lee's Chicken":
        return "You know you love it.";
      
      case "Bread Co.":
        return "Thanks to our sponsor...";
      
      case "Lizard":
        return 'Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica';
    }
  }

  return (
    <Card className={classes.card}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={get_image(food_type)}
          title={food_type}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {food_type}
          </Typography>
          <Typography component="p">
            {get_description(food_type)}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Share
        </Button>
        <Button size="small" color="primary">
          Learn More
        </Button>
      </CardActions>
    </Card>
  );
}

FoodCard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(FoodCard);
