### Create schema for sequel_burgers_db
DROP DATABASE IF EXISTS sequel_burgers_db;
CREATE DATABASE sequel_burgers_db;

USE sequel_burgers_db;

CREATE TABLE burgers(
    burger_id INT NOT NULL AUTO_INCREMENT,
    burger_name VARCHAR(200),
    devoured BOOLEAN DEFAULT false,
    PRIMARY KEY (burger_id)
);