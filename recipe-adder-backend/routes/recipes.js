const router = require('express').Router();
const multer = require('multer');
// const { v4: uuidv4 } = require('uuid');
// let path = require('path');
let Recipe = require('../models/recipe.model');
const cloudinary = require('cloudinary').v2;
const { CloudinaryStorage } = require('multer-storage-cloudinary');
require('dotenv').config();

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

// const storage = multer.diskStorage({
//   destination: function (req, file, cb) {
//     cb(null, 'https://api.cloudinary.com/v1_1/dtr2bqecp');
//   },
//   filename: function (req, file, cb) {
//     console.log(file);
//     cb(null, uuidv4() + '-' + Date.now() + path.extname(file.originalname));
//   },
// });

const storage = new CloudinaryStorage({
  cloudinary: cloudinary,
  params: {
    folder: 'recipeimages',
  },
});

const fileFilter = (req, file, cb) => {
  const allowedFileTypes = ['image/jpeg', 'image/jpg', 'image/png'];
  if (allowedFileTypes.includes(file.mimetype)) {
    cb(null, true);
  } else {
    cb(null, false);
  }
};

const upload = multer({ storage, fileFilter });

router.route('/add').post(upload.single('image'), (req, res) => {
  const name = req.body.name;
  const description = req.body.description;
  const image = req.file.filename;

  const newRecipeData = {
    name,
    description,
    image,
  };
  console.log(newRecipeData);
  const newRecipe = new Recipe(newRecipeData);

  newRecipe
    .save()
    .then(() => res.json('Recipe Added'))
    .catch((err) => res.status(400).json('Error ' + err));
});

router.route('/').get((req, res) => {
  Recipe.find({}).then((recipes) => {
    res.json(recipes);
  });
});

router.route('/:id').get((req, res) => {
  Recipe.findById(req.params.id)
    .then((recipe) => {
      if (recipe) {
        res.json(recipe);
      } else {
        res.status(404).end();
      }
    })
    .catch((error) => next(error));
});

module.exports = router;
