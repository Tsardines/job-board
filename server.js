const express = require('express');
const app = express();
const PORT = 3000;
const bodyParser = require('body-parser');
const Task = require('./models/jobs-model');
const methodOverride = require('method-override');
const bcrypt = require('bcrypt');

app.use(bodyParser.json())

app.use(methodOverride('_method'));

const urlencodedParser = bodyParser.urlencoded({ extended: false })

app.set("view engine", "ejs");





// SHOW ALL JOBS on INDEX PAGE
app.get('/', (request, response) => {
  Job.findAllJobs().then(everyJob => {
    response.json('index');
    // response.render('index', { jobs: everyJob });
  });
});


// bcrypt
const salt = '$2a$10$J4uWXuOowq9xunVbvBIPMe'


app.listen(PORT, () => {
  console.log(`Welcome to the Year ${PORT}, the world of tomorrow!`)
});
