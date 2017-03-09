const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const flavorsController = require('./controllers/flavorsController');
const cartController = require('./controllers/cartController');
const cors = require('cors');
const session = require('express-session');
const config = require('./config');

const app = express();

/**
 * @desc middleware
 */
app.use(session({
  secret: config.secret,
  saveUninitialized: true,
  resave: true,
}));

app.use(function (req, res, next) {
  console.log(`${req.method}: ${req.url}`);
  next();
});

app.use(bodyParser.json());
app.use(cors());
app.use(express.static(path.join(__dirname, 'public')));

/**
 * @desc routes
 */
app.get('/flavors', flavorsController.index);
app.get('/flavors/:id', flavorsController.show);
app.post('/flavors', flavorsController.create);
app.patch('/flavors/:id', flavorsController.update);
app.delete('/flavors/:id', flavorsController.destroy);

/**
 * @desc cart
 */
app.get('/cart', cartController.index);
app.post('/cart', cartController.create);

const { port } = config;

app.listen(port, function () {
  console.log(`gettin jiggy on port ${port}`);
});
