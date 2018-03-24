// const User = {};
//
// const db = require('../database/connection');
//
// ///// USERS /////
//
//
// /// PROFILE ///
// User.oneUser = id => {
//   return db.one('SELECT * FROM users WHERE id = $1', [id]);
// };
//
// /// REGISTER ///
// User.createUser = () => {
// return db.one('INSERT INTO users(username, password) VALUES($1, $2) RETURNING id', [users.username, users.password]);
// };
//
//
//
//
// // User.deleteUser = id => {
// //   return db.one('DELETE FROM users WHERE id = $1', [id]);
// // };
//
//
// module.exports = User;
// module.exports = db;
