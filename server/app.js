import express from 'express'

const app = express()
const cors = require('cors');
const bodyParser  = require('body-parser');
const morgan      = require('morgan');
const port        = process.env.PORT || 8080;
const routes = require('./routes/routes');



// get our request parameters
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// log to console
app.use(morgan('dev'));

//enabling cors
app.use(cors());
app.options('*', cors());

//assign routes
app.use('/api',routes);

// Start the server
app.listen(port);

console.log('App Running on: http://localhost:' + port);
