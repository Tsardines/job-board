const express = require('express');
const app = express();
const PORT = 3000;
const bodyParser = require('body-parser');
const methodOverride = require('method-override');
const bcrypt = require('bcrypt');
const Job = require('./models/jobs_model');
const User = require('./models/users_model');

app.use('/styles', express.static('styles'));
// app.use('/images', express.static('images'));

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
// const salt = '$2a$10$J4uWXuOowq9xunVbvBIPMe'






app.listen(PORT, () => {
  console.log(`Welcome to the Year ${PORT}, the world of tomorrow!`)
});
