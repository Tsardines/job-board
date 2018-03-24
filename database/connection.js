// require database setup to use pg-Promise
const pgp = require('pg-promise')({});

// connection url
const connectionURL = "postgres://localhost:5432/job_board";

// new database connection
const db = pgp(connectionURL);



module.exports = db;
