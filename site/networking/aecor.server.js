const express = require('express');
const path = require('path');
const bodyParser = require('body-parser')
/**
 * Routes
 */
const SiteRoutes = require('./routes/SiteRoutes');

/**
 * Express instance
 */
const app = express();

/**
 * Settings
 */
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '.', 'views'));
app.use(express.static(path.join(__dirname, '.', 'public')));
app.use(bodyParser.json())


/**
 * Site routes
 */
app.use('/', SiteRoutes);

/**
 * Express listen
 */
module.exports = port => new Promise(resolve => app.listen(port, resolve));
