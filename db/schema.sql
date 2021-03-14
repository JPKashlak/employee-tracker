DROP DATABASE IF EXISTS business_DB;
CREATE DATABASE business_DB;

USE business_DB;

CREATE TABLE departments (
    id INTEGER NOT NULL auto_increment PRIMARY KEY,
    name VARCHAR(30)
);

CREATE TABLE roles (
     id INTEGER NOT NULL auto_increment PRIMARY KEY,
    title VARCHAR(30) NOT NULL,
    salary DECIMAL,
    department_id INTEGER,
    FOREIGN KEY (department_id) REFERENCES department(id)
);

CREATE TABLE employees (
    id INTEGER NOT NULL auto_increment PRIMARY KEY,
    first_name VARCHAR(30) NOT NULL,
    last_name VARCHAR(30) NOT NULL,
    role_id INTEGER,
    manager_id INTEGER
);