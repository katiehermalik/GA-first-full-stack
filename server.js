
const express = require('express');
const bodyParser = require('body-parser');
const methodOverride = require('method-override');
const app = express();
const PORT = 4000;

//Set View Engine
app.set('view engine', 'ejs');

// Dogs Controller
const dogsCtrl = require('./controllers/dogsController');

// Middleware
app.use(bodyParser.urlencoded({extended: false}));
app.use(methodOverride('_method'));
app.use('/public', express.static('public'));

// Root Route
app.get('/', (req, res) => {
  res.render('index');
});

// Dogs Route
app.use('/dogs', dogsCtrl);

// Listener
app.listen(PORT, () => console.log(`Server started successfully on port ${PORT}`));