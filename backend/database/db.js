const mysql = require('mysql2');
require('dotenv').config();

const dbConfig = {
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME,
};

const connection = mysql.createConnection(dbConfig);

function connectWithRetry() {
  connection.connect((err) => {
    if (err) {
      console.error('Error connecting to the database:', err.stack);
      console.log('Retrying in 5 seconds...');
      setTimeout(connectWithRetry, 5000); // Retry after 5 seconds
      return;
    }
    console.log('Connected to the database as id', connection.threadId);
  });
}

connectWithRetry();

module.exports = connection.promise();