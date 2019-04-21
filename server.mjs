//server.js
import Behance from "node-behance-api";
import dotenv from 'dotenv';
dotenv.config();

// https://stackoverflow.com/questions/46745014/alternative-for-dirname-in-node-when-using-the-experimental-modules-flag
const __dirname = path.dirname(new URL(import.meta.url).pathname);
// console.log('Hello', process.env);

import express from 'express';
// import favicon from 'express-favicon';
import path from 'path';
const port = process.env.PORT || 8080;
const app = express();
// app.use(favicon(__dirname + '/build/favicon.ico'));
// the __dirname is the current directory from where the script is running
// app.use(express.static(__dirname));
app.use(express.static(path.join(__dirname, 'build')));
app.get('/ping', function (req, res) {
  return res.send('pong');
});
app.get('/*', function (req, res) {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.listen(port);


// var Behance = require("node-behance-api");
// var behance = new Behance({"client_id": "xxxxxxxxxxxxxxxxxxxxxxxxxxxxx"})
// Behance.initOptions();
// behance.get({
//     api: Behance.APIS.GET_USER,
//     params: { //or simply behance.get('user',
//         user:'deepakmshrma'

//     }
// }, function (error, result) {
//     if (error)
//         console.log(error)
//     else
//         console.log(result)
// });







// //////////////////////////////////////////////////////////////////////
// // Note : Express is only used on Heroku
// //////////////////////////////////////////////////////////////////////

// var express = require('express'),
//   app = express(),
//   http = require('http'),
//   bodyParser = require('body-parser'),
//   httpServer = http.Server(app);

// // set the port of our application
// // process.env.PORT lets the port be set by Heroku
// var port = process.env.PORT || 9999;

// app.use(express.static(__dirname + '/dist'));
// app.use(bodyParser.text());

// app.get('*', function (req, res) {
//   res.sendFile(__dirname + '/dist/index.html');
// });

// app.post('/api/user', function (req, res) {
//   var body = req.body;
//   console.log(body)
//   res.send(req.body);
// });

// app.listen(port, function () {
//   console.log('GotPop members is running on http://localhost:' + port);
// });
