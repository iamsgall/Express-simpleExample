const express = require('express');
const morgan = require('morgan');
const path = require('path');

const app = express();

// Settings
app.set('port', 3000);
app.set('views', path.join(__dirname, 'src/views'));
app.set('view engine', 'ejs');


// Middleware
app.use(morgan('dev'));
app.use(express.urlencoded({
    extended: false
}));
app.use(express.json());

// Routes
app.use(require('./src/routes/routes'));

// Static Files
app.use(express.static(path.join(__dirname, 'public')));

// Start Server
app.listen(app.get('port'), () => {
    console.log('server on port', app.get('port'));
});

