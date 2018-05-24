### Create schema for sequel_burgers_db
DROP DATABASE IF EXISTS sequel_burgers_db;
CREATE DATABASE sequel_burgers_db;

USE sequel_burgers_db;

CREATE TABLE burgers(
    id INT NOT NULL AUTO_INCREMENT,
    burger_name VARCHAR(200),
    devoured BOOLEAN DEFAULT false,
    createdAt TIMESTAMP,
    updatedAt TIMESTAMP,
    PRIMARY KEY (id)
);