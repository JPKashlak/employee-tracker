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
            choices: ['View All Departments', 
                      'View All Employees', 
                      'Add Department', 
                      'Add Role', 
                      'Add Employee', 
                      'Update Employee Role', 
                      'Quit'
                        ]
            }
        ]
    )
    .then(response => {
        if(response.menu === 'View All Departments') {
            console.log("Dept")
            viewDepartment();
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

function viewDepartment() {
    const query = "SELECT * FROM department";
    connection.query(query, function(err, res) {
      if (err) throw err;
      console.table(res);
      start();
    });
  }