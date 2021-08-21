const express = require('express');
const cors = require('cors');
const app = express();
const mongoose = require('mongoose');
const multer = require('multer');

require('dotenv').config();

const recipeRouter = require('./routes/recipes');

app.use(cors());
app.use(express.json());
app.use('/api/recipes', recipeRouter);

const PORT = process.env.PORT;

const uri = process.env.MONGODB_URI;

console.log('connecting to', uri);

mongoose
  .connect(uri, {
    useNewUrlParser: true,
    useFindAndModify: false,
    useCreateIndex: true,
    useUnifiedTopology: true,
  })
  .then((result) => {
    console.log('connected to MongoDB');
  })
  .catch((error) => {
    console.log('error connecting to MongoDB', error.message);
  });

app.listen(PORT, () => {
  console.log(`app listening at port ${PORT}`);
});
