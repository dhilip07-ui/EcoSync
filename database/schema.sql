CREATE DATABASE ecosync_db;

USE ecosync_db;

CREATE TABLE users (
  id VARCHAR(36) PRIMARY KEY,
  name VARCHAR(100),
  email VARCHAR(100) UNIQUE,
  password VARCHAR(100)
);

CREATE TABLE user_footprint (
  user_id VARCHAR(36),
  carbon_kg DECIMAL(10, 2),
  last_updated TIMESTAMP,
  FOREIGN KEY (user_id) REFERENCES users(id)
);