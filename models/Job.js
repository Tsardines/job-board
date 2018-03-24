const Job = {};

const db = require('../database/connection');

///// JOBS /////


/// INDEX ///
Job.showAllJobs = () => {
  return db.any('SELECT * FROM jobs');
};

// INDEX - SHOW ONE //
// Job.showOneJob = id => {
//   return db.one('SELECT * FROM tasks WHERE id = $1', [id]);
// };


/// PROFILE ///
// Job.showAllJobs = () => {
//   return db.any('SELECT * FROM jobs WHERE ')
// }


/// PROFILE
// Job.deleteJob = id => {
//   return db.one('DELETE FROM jobs WHERE id = $1', [id]);
// };


module.exports = Job;
// module.exports = db;
