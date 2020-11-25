
const mysql = require("mysql");
if (process.env.JAWSDB_URL) {
  connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
  connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "root",
    database: "burgers_db"
  });
}
connection.connect();
<<<<<<< HEAD
module.exports = connection;
=======
module.exports = connection;
>>>>>>> 7fb8d1c2a2ce9bbd08681783feeb77a6244c4aa0
