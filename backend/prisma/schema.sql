CREATE DATABASE abersoft_test;

CREATE TABLE abersoft_test.User (

  id INTEGER PRIMARY KEY AUTO_INCREMENT NOT NULL,

  email VARCHAR(255) UNIQUE NOT NULL,

  pass VARCHAR(255) NOT NULL

);