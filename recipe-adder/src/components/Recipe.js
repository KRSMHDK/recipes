import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
  Card,
  Grid,
  Container,
  CardHeader,
  CardContent,
  Typography,
  CardMedia,
  CardActions,
  Button,
} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  media: {
    height: '150px',
    weight: '100%',
    paddingTop: '100%',
  },
  container: {
    marginBottom: '20px',
    marginTop: '50px',
  },
  card: {
    height: '200px',
  },
  multiLineEllipsis: {
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    display: '-webkit-box',
    '-webkit-line-clamp': 9,
    '-webkit-box-orient': 'vertical',
  },
}));

function Recipe({ recipes }) {
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
          <Grid key={food.id} container item xs={12} md={6} lg={3} spacing={3}>
            <Card>
              <CardHeader
                title={<Typography variant='subtitle1'>{food.name}</Typography>}
              />
              <CardMedia
                className={classes.media}
                title={food.name}
                image={`https://res.cloudinary.com/dtr2bqecp/image/upload/v1629202746/${food.image}`}
              />

              <CardContent className={classes.card}>
                <Typography
                  className={classes.multiLineEllipsis}
                  variant='body2'
                  color='textSecondary'
                >
                  {food.description}
                </Typography>
              </CardContent>

              <CardActions>
                <Button size='small' color='primary'>
                  Learn More
                </Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}

export default Recipe;
