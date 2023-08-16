const inquirer = require("inquirer");
const mysql = require("mysql2");

const db = mysql.createConnection(
  {
    host: "localhost",
    user: "root",
    password: "root",
    database: "staffDB",
  },
  console.log("Connected to staffDB")
);

const questions = [
  {
    type: "list",
    message: "What would you like to do?",
    name: "mainMenu",
    choices: [
      "View all employees",
      "Add employee",
      "View All roles",
      "Add role",
      "View all departments",
      "Add department",
    ],
  },
];

const viewEmployees = () => {
  db.query(
    `SELECT employee.id, 
        employee.first_name AS FirstName,
        employee.last_name AS LastName,
        role.title AS job,
        department.name AS department,
        role.salary AS salary,
        CONCAT(manager.first_name, ' ', manager.last_name) AS manager
        FROM employee
        JOIN role
        ON employee.role_id = role.id
        JOIN department
        ON role.department_id = department.id
        LEFT JOIN employee
        AS manager
        ON employee.manager_id = manager.id`,
    (err, result) => {
      if (err) {
        console.log(err);
      }
      console.log(result);
    }
  );
};
