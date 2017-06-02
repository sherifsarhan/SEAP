var express = require('express');
var app = express();
var path = require('path');

app.use(express.static(path.join(__dirname, '/public')));

// viewed at http://localhost:8080
app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname + '/public/index.html'));
});

var server_port = process.env.PORT || 5000;
console.log(server_port);
var server = app.listen(server_port);