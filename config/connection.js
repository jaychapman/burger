// mySQL
const mysql = require("mysql");

if (process.env.JAWSDB_URL) {
  connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
  connection = mysql.createConnection({
    host: "localhost",
    user: "root",
<<<<<<< HEAD
    password: "Jason#5908",
=======
    password: "root",
>>>>>>> 4ae7992cfcdb332ae1dbac078abd108486f08163
    database: "burgers_db"
  });
}


// Connection
connection.connect(function (err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

// Export connection for ORM
module.exports = connection;
