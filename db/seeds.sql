USE employeeDB;

INSERT INTO departments (department_name)
VALUES
    ('Legal'),
    ('Engineering'),
    ('Sales'),
    ('Finance');

INSERT INTO roles (title, salary, department_id)
VALUES
    ('Senior Lawyer', 100000, 1),
    ('Junior Associate', 85000, 1),
    ('IT Manager', 200000, 2),
    ('Engineer', 150000, 2),
    ('Sale Manager', 70000, 3),
    ('Sales Associate', 40000, 3),
    ('Senior Accountant', 75000, 4),
    ('Junior Accountant', 60000, 4);

INSERT INTO employees (first_name, last_name, role_id, manager_id)
VALUES
    ('Adam', 'Zane', 2, 1),
    ('Beth', 'Yruges', 7, NULL),
    ('Carl', 'Xavier', 4, 3),
    ('Dana', 'Witchita', 6, 5),
    ('Elon', 'Vance', 8, 7),
    ('Felicia', 'Uvalde', 2, 1),
    ('Gregor', 'Triczynski', 4, 3),
    ('Hiromi', 'Solaire', 1, NULL),
    ('Ivan', 'Reinhardt', 6, 5),
    ('Jane', 'Quartemane', 5, NULL),
    ('Kevin', 'Potterswheel', 8, 7),
    ('Lavinia', 'Oppenheim', 3, NULL),
    ('Morticia', 'Nihilanth', 2, 1);

