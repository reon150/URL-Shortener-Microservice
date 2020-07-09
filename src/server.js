const express = require('express');
const cors = require('cors');

const app = express();

// settings
app.set('port', process.env.PORT || 4000);

// middlewares 
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(express.static(__dirname + '/public'));

app.get('/', function(req, res){
    res.sendFile( __dirname + '/views/');
});

// routes
app.use('/api/shorturl', require('./routes/urlshort.routes'));

module.exports = app;
