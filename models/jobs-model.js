


const Job = {};
const User = {};


///// JOBS /////
Job.findAllJobs = () => {
  return db.any('SELECT * FROM jobs');
};

Job.findById = id => {
  return db.one('SELECT * FROM jobs WHERE id = $1', [id]);
};

// FIX THIS ONE
// Job.createJob = task => {
// return db.one('INSERT INTO jobs(subject, content) VALUES($1, $2) RETURNING id', [job.subject, job.content]);
// };

// Job.deleteJob = id => {
//   return db.one('DELETE FROM jobs WHERE id = $1', [id]);
// };





///// USERS /////
User.findAllUsers = () => {
  return db.any('SELECT * FROM users');
};

User.findById = id => {
  return db.one('SELECT * FROM users WHERE id = $1', [id]);
};

// FIX THIS ONE
User.createUser = task => {
return db.one('INSERT INTO users(subject, content) VALUES($1, $2) RETURNING id', [job.subject, job.content]);
};

// User.deleteUser = id => {
//   return db.one('DELETE FROM users WHERE id = $1', [id]);
// };

module.exports = Job;
module.exports = User;
