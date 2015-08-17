var express = require('express');
var nodemailer = require('nodemailer');
var bodyParser = require('body-parser');
var app = express();


// set body parser
app.use(bodyParser.urlencoded({extended: false }));

// NodeMailer Settings

// create reusable transporter object using SMTP transport
var transporter = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
        user: 'mahoneywebmail@gmail.com',
        pass: 'xxx'
    }
});

// var mailOptions = {
// 	from: 'email address',

// }






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

// Process email form
app.post('/', function(req,res) {
	console.log(req.body.fromEmail);
	console.log(req.body.subject);
	console.log(req.body.message);
	res.render('pages/index');
});




app.listen(port, function() {
	console.log('App running on port ' + port);
});