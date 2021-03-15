DROP DATABASE IF EXISTS business_DB;
CREATE DATABASE business_DB;

USE business_DB;

CREATE TABLE department (
    id INTEGER NOT NULL auto_increment,
    department_name VARCHAR(30),
    PRIMARY KEY (id)
);

CREATE TABLE role (
    id INTEGER NOT NULL auto_increment,
    title VARCHAR(30) NOT NULL,
    salary DECIMAL(10, 0) NOT NULL,
    department_id INTEGER NOT NULL,
    PRIMARY KEY(id)
);

CREATE TABLE employee (
    id INTEGER NOT NULL auto_increment,
    first_name VARCHAR(30) NOT NULL,
    last_name VARCHAR(30) NOT NULL,
    role_id INTEGER,
    manager_id INTEGER,
    PRIMARY KEY (id)
);