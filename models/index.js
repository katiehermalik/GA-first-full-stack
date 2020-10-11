const mongoose = require('mongoose');
const connectionString = 'mongodb://localhost:27017/pet-store';

mongoose.connect(connectionString, {
  useNewUrlParser: true,
  useFindAndModify: false,
  useCreateIndex: true,
  useUnifiedTopology: true,
}) 
mongoose.connection.on('connected', (result) => {
  console.log('MongoDB connected...')
});
mongoose.connection.on('error', (error) => {
  console.log(error);
});


module.exports = {
  Dog: require('./Dog')
};
