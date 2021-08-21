import { Container, Grid, TextField } from '@material-ui/core';

import { Button, Typography, makeStyles, Paper } from '@material-ui/core';
import React, { useState } from 'react';
import recipeService from '../services/recipes';

const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiFormControl-root': {
      width: '80%',
      margin: theme.spacing(1),
    },
  },
}));

function RecipeForm() {
  const [recipeName, setRecipeName] = useState('');
  const [description, setDescription] = useState('');
  const [image, setImage] = useState('');

  const classes = useStyles();

  const addRecipe = (event) => {
    event.preventDefault();
    const formData = new FormData();
    formData.append('name', recipeName);
    formData.append('description', description);
    formData.append('image', image);

    recipeService.create(formData);

    setRecipeName('');
    setDescription('');
    setImage('');
  };

  return (
    <Paper classes={classes.pageContent}>
      <Container>
        <Typography>Create a new Recipe</Typography>

        <form
          className={classes.root}
          onSubmit={addRecipe}
          encType='multipart/form-data'
        >
          <Grid container>
            <Grid item xs={6}>
              <TextField
                required
                id='outlined-basic'
                label='Recipe Name'
                variant='outlined'
                value={recipeName}
                onChange={(event) => setRecipeName(event.target.value)}
              />
              <TextField
                required
                id='outlined-basic'
                label='Description'
                variant='outlined'
                value={description}
                onChange={(event) => setDescription(event.target.value)}
              />
            </Grid>

            {/* //Upload Image Button */}

            <label htmlFor='contained-button-file'>
              <Button variant='contained' color='primary' component='span'>
                Upload
              </Button>
            </label>
            <input
              style={{ display: 'none' }}
              id='contained-button-file'
              type='file'
              accept='.png, .jpg, .jpeg'
              onChange={(event) => setImage(event.target.files[0])}
            />

            <Button type='submit' color='primary' variant='contained'>
              Submit
            </Button>
          </Grid>
        </form>
      </Container>
    </Paper>
  );
}

export default RecipeForm;
