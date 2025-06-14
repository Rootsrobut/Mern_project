const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const ejs = require('ejs');
const path = require('path');

// Middleware setup
app.use(express.static(path.join(__dirname, '/views')));
app.engine('html', ejs.renderFile);
app.set('view engine', 'html');
app.set('views', path.join(__dirname, '/views'));

// Body parser middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Routes
app.use('/', require('./routes/server'));

// Server startup
const port = process.env.PORT || 1234;
app.listen(port, () => {
    console.log(`Server is started on port ${port}`);
});