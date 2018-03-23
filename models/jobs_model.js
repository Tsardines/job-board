


const Job = {};

///// JOBS /////
Job.findAllJobs = () => {
  return database.any('SELECT * FROM jobs');
};

Job.findById = id => {
  return database.one('SELECT * FROM jobs WHERE id = $1', [id]);
};

// FIX THIS ONE
// Job.createJob = task => {
// return db.one('INSERT INTO jobs(subject, content) VALUES($1, $2) RETURNING id', [job.subject, job.content]);
// };

// Job.deleteJob = id => {
//   return db.one('DELETE FROM jobs WHERE id = $1', [id]);
// };



module.exports = Job;
