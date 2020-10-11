const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const dogSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  breed: {
    type: String,
    required: true,
  },
  age: Number,
}, {timestamps: true});


const Dog = mongoose.model('Dog', dogSchema);

module.exports = Dog;