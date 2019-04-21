//server.js
import dotenv from 'dotenv';
dotenv.config();
import path from 'path';
import express from 'express';
import Behance from './node/behance.service';
import fetch from "node-fetch";

// Node 10+ does not support __dirname
const __dirname = path.dirname(new URL(
  import.meta.url).pathname);

//Express
const port = process.env.PORT || 8080;
const app = express();

// Behance
let goBehance = new Behance(process.env.BE_USERNAME, process.env.BE_API_KEY);
let thisBehance = goBehance.getProjects();

app.use(express.static(path.join('./', 'build')));

let maUrl = `https://www.behance.net/v2/users/${process.env.BE_USERNAME}/projects?api_key=${process.env.BE_API_KEY}`;

app.get('/ping', function (req, res) {
  let maData = 'unset';

  fetch(maUrl)
  .then(response => response.json())
  .then(data => {
    maData = data.projects[0].name;
    console.log(typeof data.projects[0].name); // Prints result from `response.json()` in getRequest
    res.send(maData);
  })
  .catch(error => console.error(error));
});

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.listen(port, function () {
  console.log('GotPop is running on http://localhost:' + port);
});
