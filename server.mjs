//server.js
import dotenv from 'dotenv';
dotenv.config();
import path from 'path';
import express from 'express';
import Behance from './node/behance.service'

// Node 10+ does not support __dirname
const __dirname = path.dirname(new URL(import.meta.url).pathname);

//Express
const port = process.env.PORT || 8080;
const app = express();

app.use(express.static(path.join(__dirname, 'build')));

app.get('/ping', function (req, res) {
  return res.send('pong');
});

app.get('/*', function (req, res) {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.post('/api/user', function (req, res) {
  var body = req.body;
  console.log(body)
  res.send(req.body);
});

app.listen(port);


let goBehance = new Behance(process.env.BE_USERNAME, process.env.BE_API_KEY);

let thisBehance = goBehance.getProjects();

console.log('Hello', thisBehance);
