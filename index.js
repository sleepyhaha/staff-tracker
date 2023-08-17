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

const mainMenu = [
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

const addDepartmentPrompt = async () => {
  try {
    await inquirer.prompt({
      type: "input",
      message: "What is the name of the department?",
      name: "department",
      validate: (input) => {
        if (input) {
          return true;
        } else {
          console.log("Please enter a department name.");
        }
        return false;
      },
    });
    addDepartment(data);
  } catch (err) {
    console.log("There was an error");
  }
};

const addRolePrompt = async () => {
  try {
    await inquirer.prompt([
      {
        type: "input",
        message: "What is the role title?",
        name: "roleTitle",
        validate: (input) => {
          if (input) {
            return true;
          } else {
            console.log("Please enter a role title.");
          }
          return false;
        },
      },
      {
        type: "input",
        message: "What is the salary for the role?",
        name: "roleSalary",
        validate: (input) => {
          if (input) {
            return true;
          } else {
            console.log("Please enter a salary");
          }
          return false;
        },
      },
      {
        type: "input",
        message: "What department is the role in?",
        name: "roleDept",
        validate: (input) => {
          if (input) {
            return true;
          } else {
            console.log("Please enter a department");
          }
          return false;
        },
      },
    ]);
    addRole(data);
  } catch (err) {
    console.log("There was an error.");
  }
};
