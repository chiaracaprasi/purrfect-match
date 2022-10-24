-- delete database if already exists
DROP DATABASE IF EXISTS cats;

-- create database
CREATE DATABASE IF NOT EXISTS cats;

-- create user with all privileges
CREATE USER IF NOT EXISTS 'root'@'localhost' IDENTIFIED BY 'password';

-- grant all privileges
GRANT ALL on cats.* TO 'root'@'localhost';
FLUSH PRIVILEGES;

-- create tables
CREATE TABLE IF NOT EXISTS cats.cat_details (
       id           INT UNSIGNED ZEROFILL NOT NULL AUTO_INCREMENT PRIMARY KEY,
       created_at   DATETIME DEFAULT CURRENT_TIMESTAMP,
       name 	      VARCHAR(50) NOT NULL,
       dob 	      DATE NOT NULL,
       sex 	      ENUM('Female', 'Male') NOT NULL,
       breed 	      VARCHAR(50)  NOT NULL,
       photo 	      VARCHAR(500) NOT NULL,
       blurb 	      MEDIUMTEXT NOT NULL
);

CREATE TABLE IF NOT EXISTS cats.cat_personalities (
       id           INT UNSIGNED ZEROFILL NOT NULL AUTO_INCREMENT PRIMARY KEY,
       created_at   DATETIME DEFAULT CURRENT_TIMESTAMP,
       grooming     ENUM('1', '2', '3') NOT NULL,
       energy       ENUM('1', '2', '3') NOT NULL,
       social       ENUM('1', '2', '3') NOT NULL,
       other_animals SET('cat', 'dog', 'small') NOT NULL,
       children     BOOLEAN NOT NULL,
       indoor       BOOLEAN NOT NULL,
       details_id   INT UNSIGNED ZEROFILL NOT NULL,
       FOREIGN KEY(details_id) REFERENCES cat_details(id) ON DELETE CASCADE
);