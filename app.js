var express = require("express");
var app = express();
var path = require('path');

app.use('/media', express.static(__dirname + '/media'));
app.use('/js', express.static(__dirname + '/js'));

// Set up a URL route
app.get('/', function (req, res) {
    res.sendFile(__dirname + '/index.html');
});

// bind the app to listen for connections on a specified port
var port = process.env.PORT || 3000;
app.listen(port);
