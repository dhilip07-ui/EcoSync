const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const mysql = require('mysql2/promise');
require('dotenv').config();

const app = express();
app.use(cors());
app.use(bodyParser.json());

// MySQL Connection
const pool = mysql.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
});

// API Routes
app.get('/api/footprint/:userId', async (req, res) => {
  const [rows] = await pool.query(
    'SELECT * FROM user_footprint WHERE user_id = ?',
    [req.params.userId]
  );
  res.json(rows[0]);
});

app.listen(3000, () => console.log('Server running on port 3000'));
