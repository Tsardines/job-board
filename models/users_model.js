const User = {};

///// USERS /////
User.findAllUsers = () => {
  return database.any('SELECT * FROM users');
};

User.findById = id => {
  return database.one('SELECT * FROM users WHERE id = $1', [id]);
};

// FIX THIS ONE
User.createUser = task => {
return database.one('INSERT INTO users(subject, content) VALUES($1, $2) RETURNING id', [job.subject, job.content]);
};

// User.deleteUser = id => {
//   return db.one('DELETE FROM users WHERE id = $1', [id]);
// };




module.exports = User;
