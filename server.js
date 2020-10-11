
const express = require('express');
const bodyParser = require('body-parser');
const methodOverride = require('method-override');
const app = express();
const PORT = 4000;


// Middleware
app.use(bodyParser.urlencoded({extended: false}));
app.use(methodOverride('_method'));

// Listener
app.listen(PORT, () => console.log(`Server started successfully on port ${PORT}`));