CREATE DATABASE IF NOT EXISTS ports_and_adapters_example;

USE ports_and_adapters_example;

CREATE TABLE users (
  id INTEGER PRIMARY KEY AUTO_INCREMENT,
  name VARCHAR(255)
);


INSERT INTO users (name) VALUES 
('Rafael'), ('Miguel');