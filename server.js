const inquirer = require('inquirer');
const mysql = require('mysql2');

// Create Connection To Database
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'Crosstale94',
    database: 'test'
});

connection.query(
 
)

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
            promptUser();
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

promptUser();