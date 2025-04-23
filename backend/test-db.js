const mysql = require('mysql2');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'root',
  database: 'ecosync_db'
});

connection.connect(err => {
  if (err) {
    console.error('Connection failed:', err.stack);
    return;
  }

  console.log('MySQL Connected! ID:', connection.threadId);

  // Close the connection properly after successful connection
  connection.end(err => {
    if (err) {
      console.error('Error closing the connection:', err.stack);
    } else {
      console.log('Connection closed successfully.');
    }
  });
});
