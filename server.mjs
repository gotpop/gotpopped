//server.js
import dotenv from 'dotenv';
dotenv.config();
import path from 'path';
import express from 'express';
import favicon from 'express-favicon';
import Behance from './node/behance.service';
import fetch from "node-fetch";

// Node 10+ does not support __dirname
const __dirname = path.dirname(new URL(
  import.meta.url).pathname);

//Express
const port = process.env.PORT || 3001;
const app = express();

// Behance
const goBehance = new Behance(process.env);
const thisBehance = goBehance.getProjects();

app.use(express.static(path.join(__dirname, 'build')));
app.use(favicon(__dirname + '/public/favicon.png'));

app.get('/behance/projects', function (req, res) {
  fetch(thisBehance)
  .then(response => response.json())
  .then(data => {
    res.send(data);
  })
  .catch(error => console.error(error));
});

app.get('/behance/project', function (req, res) {

  let projectId = req.query.projectId;
  const thisBehanceProject = goBehance.getProject(projectId);
  console.log("TCL: thisBehance", thisBehanceProject);
  
  fetch(thisBehanceProject)
  .then(response => response.json())
  .then(data => {
    res.send(data);
  })
  .catch(error => console.error(error));
});

app.get('*', function (req, res) {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.listen(port, function () {
  console.log('GotPop is running on http://localhost:' + port);
});
