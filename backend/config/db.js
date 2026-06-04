const mysql = require("mysql2");
const dotenv = require("dotenv");

dotenv.config();

const connection = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  socketPath: "/Applications/MAMP/tmp/mysql/mysql.sock",
});

connection.connect((err) => {
  if (err) {
    console.error("Database connection failed:", err);
    return;
  }

  console.log("MySQL Connected");
});

module.exports = connection;
