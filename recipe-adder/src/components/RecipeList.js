import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Card, Grid, Container, CardMedia } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  media: {
    height: '300px',
    width: '300px',
    position: 'relative',
  },
  container: {
    marginBottom: '20px',
    marginTop: '50px',
  },
  card: {
    borderRadius: '10px',
    border: '1px solid #9ca69c',
  },
  imageText: {
    alignItems: 'bottom',
    background: '#f5f2f2',
    color: '#418a41',
    position: 'absolute',
    paddingLeft: '10px',
    paddingRight: '10px',
    bottom: 70,
    left: 5,
    fontWeight: 'bold',
    borderRadius: '10px',

    width: 'auto',
    fontSize: '15px',
  },
}));

function RecipeList({ recipes }) {
  const classes = useStyles();

  return (
    <Container>
      <Grid
        container
        justifyContent='center'
        className={classes.container}
        spacing={6}
      >
        {recipes.map((food) => (
          <Grid key={food.id} container item xs={12} md={6} lg={4} spacing={5}>
            <Card className={classes.card}>
              <CardMedia
                className={classes.media}
                title={food.name}
                image={`https://res.cloudinary.com/dtr2bqecp/image/upload/v1629202746/${food.image}`}
              >
                <div className={classes.imageText}>{food.name}</div>
              </CardMedia>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}

export default RecipeList;
