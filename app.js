// The App
var express = require("express");
var app = express();
var path = require('path');

var index = require("./routes/index");
var code = require("./routes/code");
var p5js = require("./routes/p5js");
// Set the view engine
app.set('view engine', 'jade');

// Set the directory that contains the views
app.set('views', __dirname + '/views');

app.use('/', index);
app.use(express.static(path.join(__dirname, 'public')));

app.get('/resume', function(req, res){
	res.sendFile(__dirname + "/public/assets/Subhankar_Panda_Resume.pdf");
});

app.use('/code', code)
app.use('/p5js', p5js)
app.use(function(req, res, next){
  res.status(404).send('page not found');
});


// Create HTTP server with your app
var http = require("http");
var server = http.createServer(app)

// Listen to port 3000 
app.listen(process.env.PORT || 3000);
console.log("port 3000!");

