const express = require('express');
const router = express.Router();

const db = require('../models')

// Current path = '/dogs'

// GET new
router.get('/new', (req, res) => {
  res.render('dogs/newDog');
});

// POST create
router.post('/', (req, res) => {
  db.Dog.create(req.body, (err, newDog) => {
    if (err) return console.log(err);
    res.redirect(`/dogs/${newDog._id}`)
  });
});

// GET index
router.get('/', (req, res) => { // route handler (express)
  db.Dog.find({}, (err, allDogs) => {
    if (err) console.log(err);
    res.render('dogs/indexDog', { // Response (express)
      dogs: allDogs,
    });
  });
});

module.exports = router;