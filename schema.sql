CREATE DATABASE IF NOT EXISTS ecosync_db;

USE ecosync_db;

CREATE TABLE IF NOT EXISTS users (
  id VARCHAR(36) PRIMARY KEY,
  name VARCHAR(100) NOT NULL,
  email VARCHAR(100) UNIQUE NOT NULL,
  password VARCHAR(100) NOT NULL
);

CREATE TABLE IF NOT EXISTS user_footprint (
  user_id VARCHAR(36),
  carbon_kg DECIMAL(10, 2) DEFAULT 0.00,
  last_updated TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE,
  PRIMARY KEY (user_id)
);

-- Create indexes for better performance
CREATE INDEX idx_user_email ON users(email);
