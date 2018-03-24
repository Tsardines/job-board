const express = require('express');
const app = express();
const PORT = 3000;
const bodyParser = require('body-parser');
const methodOverride = require('method-override');
// const bcrypt = require('bcrypt');
const Job = require('./models/Job');
const User = require('./models/User');
const connection = require('./database/connection')

// app.use('/styles', express.static('styles'));
// app.use('/images', express.static('images'));

app.use(bodyParser.json())

app.use(methodOverride('_method'));

const urlencodedParser = bodyParser.urlencoded({ extended: false })

app.set("view engine", "ejs");

// bcrypt
// const salt = '$2a$10$J4uWXuOowq9xunVbvBIPMe'



///// GET /////

// GET INDEX
app.get('/', (request, response) => {
  Job.showAllJobs().then(everyJob => {
    response.json(everyJob);
    // response.render('index', { jobs: everyJob });
  });
});


// SHOW ONE
// app.get('/:id', (request, response) => {
//   const id = parseInt(request.params.id);
//   Job.showOneJob(id).then(jobId => {
//     response.render('index', { jobs: jobId });
//   });
// });

// GET PROFILE
// app.get('/profile/:id', (request, response) => {
//   const id = parseInt(request.params.id);
//   User.findById(id).then(userProfileId => {
//     response.json('profile')
    // response.render('profile', { user: userProfileId });
//   });
// });

// GET LOGIN
// app.get('/login', (request, response) => {
//     response.json('login');
    // response.render('login', { jobs: everyJob });
//   });
// });

// GET REGISTER
// app.get('/register', (request, response) => {
//     response.json('register');
    // response.render('register', { jobs: everyJob });
// });




///// CREATE /////

// GET REGISTER
// app.get('/register', (request, response) => {
//   response.render('register');
// })

// POST REGISTER
// app.post('/register', urlencodedParser, (request, response) => {
//   const newUser = request.body;
//   Task.createUser(newUser).then(user => { // might change 'user'
//   response.redirect('/');
// })
// .catch((error) => {
//   response.send(error);
//   })
// });




///// EDIT /////

// GET PROFILE
// app.get('/profile/:id/edit', (request, response) => {
//   let editBio = parseInt(request.params.id);
//   User.findById(editBio).then(user => {
//     response.json('profile');
//     // response.render('edit', { user: user});
//   })
// });

// PUT PROFILE
// app.put('/profile/:id', urlencodedParser, (request, response) => {
// let id = parseInt(request.params.id);
// let editedTask = request.body;
// Task.editBio(id, editedBio);
//   response.redirect(`/profile/${id}`);
// });




app.listen(PORT, () => {
  console.log(`Welcome to the Year ${PORT}, the world of tomorrow!`)
});
