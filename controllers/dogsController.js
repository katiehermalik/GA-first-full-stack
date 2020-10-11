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
    const context = {
      dogs: allDogs,
    };
    res.render('dogs/indexDog', context);
  });
});

// GET show
router.get('/:dogId', (req, res) => {
  db.Dog.findById(req.params.dogId, (err, foundDog) => {
    if (err) return console.log(err);
    const context = {
      dog: foundDog,
    };
    res.render('dogs/showDog', context);
  });
});

// DELETE 
router.delete('/:dogId', (req, res) => {
  db.Dog.findByIdAndDelete(req.params.dogId, (err, deletedDog) => {
    if (err) return console.log(err);
    res.redirect('/dogs');
  });
});

// GET edit
router.get('/:dogId/edit', (req, res) => {
  db.Dog.findById(req.params.dogId, (err, foundDog) => {
    if (err) return console.log(err);
    res.render('dogs/editDog', {
      dog: foundDog,
    });
  });
});

// PUT update
router.put('/:dogId', (req, res) => {
  db.Dog.findByIdAndUpdate(
    req.params.dogId, 
    req.body, 
    (err, updatedDog) => { 
      if (err) return console.log(err);
      res.redirect(`/dogs/${updatedDog._id}`);
    }
  );
});

module.exports = router;