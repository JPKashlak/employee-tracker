DROP DATABASE IF EXISTS employeeDB;
CREATE DATABASE employeeDB;

USE employeeDB;

CREATE TABLE departments (
    id INTEGER NOT NULL auto_increment,
    department_name VARCHAR(30) NOT NULL,
    PRIMARY KEY (id)
);

CREATE TABLE roles (
    id INTEGER NOT NULL auto_increment,
    title VARCHAR(30) NOT NULL,
    salary DECIMAL(10, 0) NOT NULL,
    department_id INTEGER NOT NULL,
    PRIMARY KEY(id)
    FOREIGN KEY(department_id) REFERENCES departments(id)
);

CREATE TABLE employees (
    id INTEGER NOT NULL auto_increment,
    first_name VARCHAR(30) NOT NULL,
    last_name VARCHAR(30) NOT NULL,
    role_id INTEGER,
    manager_id INTEGER,
    FOREIGN KEY (role_id) REFERENCES roles(id),
    FOREIGN KEY (manager_id) REFERENCES employees(id)
);