//////////////////////////////////////////////////////////////////////
// Note : Express is only used on Heroku
//////////////////////////////////////////////////////////////////////

var express = require('express'),
  app = express(),
  http = require('http'),
  bodyParser = require('body-parser'),
  httpServer = http.Server(app);

// set the port of our application
// process.env.PORT lets the port be set by Heroku
var port = process.env.PORT || 9999;

app.use(express.static(__dirname + '/dist'));
app.use(bodyParser.text());

app.get('*', function (req, res) {
  res.sendFile(__dirname + '/dist/index.html');
});

app.post('/api/user', function (req, res) {
  var body = req.body;
  console.log(body)
  res.send(req.body);
});

app.listen(port, function () {
  console.log('GotPop members is running on http://localhost:' + port);
});
