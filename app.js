// List the Dependencies
require('dotenv').config();
const express = require('express');
const express_hbs = require('express-handlebars');
const path = require('path');
const initWebRoutes = require('./server/router/router')

// Create Express Server
const app = express();
const PORT = process.env.PORT || 5000;

// Use JSON Format
app.use(express.urlencoded({extended: true}));
app.use(express.json());

// Static Public Folder
app.use(express.static('public'));
app.use(express.static(path.join(__dirname, '/public')));

// Template Engine
app.engine('hbs', express_hbs( {extname: '.hbs' }));  // Requires Express-Handlebars 5.3.3, newer versions break on windows...
app.set('view engine', 'hbs');

// Router Init
initWebRoutes(app);

// Init Listen
app.listen(PORT, () => console.log(`Server running http://127.0.0.1:${PORT}/`)); // This port is defined in the system ENV