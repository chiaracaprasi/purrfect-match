-- create database
CREATE DATABASE IF NOT EXISTS cats;

-- create user with all privileges
CREATE USER
       IF NOT EXISTS 'root'@'localhost' IDENTIFIED BY 'root';

-- grant all privileges
GRANT ALL on cats.* TO 'root'@'localhost';
FLUSH PRIVILEGES;

-- create tables
CREATE TABLE IF NOT EXISTS cats.pet_details (
       id    	  INT(6) UNSIGNED ZEROFILL NOT NULL AUTO_INCREMENT,
       name 	  VARCHAR(50)  NOT NULL,
       dob 	      DATE	       NOT NULL,
       breed 	  VARCHAR(50)  NOT NULL,
       sex 	      ENUM('m', 'f') NOT NULL,
       photo 	  VARCHAR(500) NOT NULL,
       PRIMARY KEY(id)
);

CREATE TABLE IF NOT EXISTS cats.pet_personality (
       id    	     INT(6) UNSIGNED ZEROFILL NOT NULL AUTO_INCREMENT,
       energy 	     ENUM('1', '2', '3') NOT NULL,
       social 	     ENUM('1', '2', '3') NOT NULL,
       other_animals SET('none', 'cat', 'dog', 'small') NOT NULL,
       children      ENUM('y', 'n')	 NOT NULL,
       indoor 	     ENUM('y', 'n')	 NOT NULL,
       grooming      ENUM('1', '2', '3') NOT NULL,
       blurb 	     MEDIUMTEXT  NOT NULL,
       FOREIGN KEY (id) REFERENCES cats.pet_details(id)
       ON UPDATE CASCADE ON DELETE CASCADE
);