var express = require('express');
var nodemailer = require('nodemailer');
var bodyParser = require('body-parser');
var app = express();


// set body parser
app.use(bodyParser.json());

// NodeMailer Settings

// create reusable transporter object using SMTP transport
var transporter = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
        user: 'mahoneywebmail@gmail.com',
        pass: 'xxx'
    }
});

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
app.post('/message', function(req,res) {
	console.log('Request received by email path.');  
	console.log('Email: ' + req.body.email);
	console.log('Subject: ' + req.body.subject);
	console.log('Message: ' + req.body.message);

	var mailOptions = {
	    from: req.body.email, // sender address
	    to: 'mahoneywebmail@gmail.com', // list of receivers
	    subject: req.body.subject, // Subject line
	    text: 'Email sent by ' + req.body.email + ':\n\n' + req.body.message, // plaintext body
	};

	var successCondition;
	transporter.sendMail(mailOptions, function(error, info){
    	if(error){
        	console.log(error);
        	res.send({"success": false});
    	} else {
        	console.log('Message sent: ' + info.response);
        	res.send({"success": true});
    	}
	});
	
	console.log('Response sent.');
});


app.listen(port, function() {
	console.log('App running on port ' + port);
});