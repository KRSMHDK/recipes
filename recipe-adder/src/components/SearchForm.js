import { TextField, Typography, makeStyles } from '@material-ui/core';
import React from 'react';

const useStyles = makeStyles((theme) => ({
  textField: {
    width: '50%',
    marginLeft: 'auto',
    marginRight: 'auto',
    paddingBottom: 0,
    marginTop: 25,
    fontWeight: 500,
    backgroundColor: 'white',
  },
  bg: {
    background:
      'url("https://upload.wikimedia.org/wikipedia/commons/thumb/e/e9/Indian_SPices.jpg/618px-Indian_SPices.jpg")',
  },
}));

function SearchForm() {
  const classes = useStyles();
  return (
    <div className={classes.bg}>
      <Typography variant='h2'>Recipe Searcher</Typography>
      <img
        style={{ width: '220px' }}
        alt='cook'
        src='https://upload.wikimedia.org/wikipedia/commons/1/14/141-man-cook-1.svg'
      />
      <Typography variant='h5' color='textSecondary' paragraph>
        Hello, let me help you find your food from our recipe list <br /> Type
        your food below
      </Typography>

      <TextField
        className={classes.textField}
        id='outlined-search'
        label='Search field'
        type='search'
        variant='outlined'
        color='primary'
      />
    </div>
  );
}

export default SearchForm;
