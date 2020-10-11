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


module.exports = router;