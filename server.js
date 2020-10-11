
const express = require('express');
const bodyParser = require('body-parser');
const methodOverride = require('method-override');
const app = express();
const PORT = 4000;

//Set View Engine
app.set('view engine', 'ejs');

// Middleware
app.use(bodyParser.urlencoded({extended: false}));
app.use(methodOverride('_method'));

// Root Route
app.get('/', (req, res) => {
  res.render('index');
});

// Listener
app.listen(PORT, () => console.log(`Server started successfully on port ${PORT}`));