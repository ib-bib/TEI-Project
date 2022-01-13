
/* create user 'admin' */
CREATE USER 'admin'@'localhost' IDENTIFIED BY '12345';

/* create database 'covid19' */
CREATE DATABASE covid19;

/* grant user 'admin' all privileges on covid19 database */
GRANT ALL PRIVILEGES ON covid19.* TO 'admin'@'localhost';

/* create users table */
CREATE TABLE covid19.users (
    id int NOT NULL AUTO_INCREMENT,
    user varchar(255),
    pass varchar(255),
    PRIMARY KEY (id)
);

/* create mail table */
create table covid19.mail (
    id int NOT NULL AUTO_INCREMENT, 
    name varchar(255), 
    email varchar(255), 
    message varchar(255), 
    PRIMARY KEY (id)
);