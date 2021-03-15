const inquirer = require('inquirer');
const mysql = require('mysql2');
const table = require('console.table')

// Create Connection To Database
const connection = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: 'Crosstale94',
    database: 'business_DB'
});

connection.connect(function (err) {
    if (err) throw err;
    console.log("connected as id " + connection.threadId);
    // runs the app
    promptUser();
});

const promptUser = () => {
    return inquirer.prompt(
        [
            {
            type: 'list',
            name: 'menu',
            message: "Select an option:",
            choices: ['View All Departments', 'View All Employees', 'Add Department', 'Add Role', 'Add Employee', 'Update Employee Role', 'Quit']
            }
        ]
    )
    .then(response => {
        if(response.menu === 'View All Departments') {
            console.log("Dept")
            promptUser();
        }
        if(response.menu === 'View All Employees') {
            console.log("Emp")
            viewEmployees();
        }
        if(response.menu === 'Add Department') {
            console.log("Add Dept")
            promptUser();
        }
        if(response.menu === 'Add Role') {
            console.log("Add Role")
            promptUser();
        }
        if(response.menu === 'Add Employee') {
            console.log("Add Emp")
            promptUser();
        }
        if(response.menu === 'Update Employee Role'){
            console.log("Update")
            promptUser();
        }
        else {
            console.log("Goodbye")
        }
    }) 
}

function viewEmployees() {
    const query = `SELECT employees.id, employees.first_name, employees.last_name, roles.title, departments.name AS department, roles.salary, CONCAT(manager.first_name, ' ', manager.last_name) AS manager
    FROM employee
    LEFT JOIN employee manager on manager.id = employee.manager_id
    INNER JOIN role ON (role.id = employee.role_id)
    INNER JOIN department ON (department.id = role.department_id)
    ORDER BY employee.id;`;
    connection.query(query, (err, res) => {
        if (err) throw err;
        console.log('\n');
        console.log('VIEW ALL EMPLOYEES');
        console.log('\n');
        console.table(res);
        prompt();
    });
}