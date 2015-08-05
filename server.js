var express = require('express');
var app = express();

// set the port of our application
// process.env.PORT lets the port be set by Heroku
var port = process.env.PORT || 8000;

// set the view engine to ejs
app.set('view engine', 'ejs');

// Include static CSS directory
app.use('/public', express.static(__dirname + '/public'));

// use res.render to load up an ejs view file

// index page
app.get('/', function(req, res) {
	res.render('pages/index');
});

app.listen(port, function() {
	console.log('App running on port ' + port);
});