var mysql = require("mysql");

if (process.env.JAWSDB_URL) {
  connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
  var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "yourRootPassword",
    database: "burger_db"
  });
}

connection.connect(function(err) {
  if (err) throw err;
  console.log(
    "You have been connect through " + connection.threadId + "thread id"
  );
});

module.exports = connection;
