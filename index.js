const inquirer = require("inquirer");
const mysql = require("mysql2");
const {
  viewEmployees,
  addEmployee,
  addRole,
  viewDepartment,
  addDepartment,
  viewRoles,
} = require("./query");
require("./query");

const db = mysql.createConnection(
  {
    host: "localhost",
    user: "root",
    password: "root",
    database: "staffDB",
  },
  console.log("Connected to staffDB")
);

db.connect((error) => {
  if (error) throw error;
  init();
});

const mainMenuPrompt = [
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

const addEmployeePrompt = async () => {
  try {
    await inquirer.prompt([
      {
        type: "input",
        message: "What is the employees first name?",
        name: "firstName",
        validate: (input) => {
          if (input) {
            return true;
          } else {
            console.log("Please enter a department");
          }
          return false;
        },
      },
      {
        type: "input",
        message: "What is the employees last name?",
        name: "lastName",
        validate: (input) => {
          if (input) {
            return true;
          } else {
            console.log("Please enter a department");
          }
          return false;
        },
      },
      {
        type: "list",
        message: "What is their role?",
        name: "role",
        choices: [
          { name: "CSA", value: 1 },
          { name: "CS Lead", value: 2 },
          { name: "Account Executive", value: 3 },
          { name: "BDR", value: 4 },
          { name: "Software Engineer", value: 5 },
          { name: "Tech Lead", value: 6 },
          { name: "Fraud Analyst", value: 7 },
          { name: "Credit Risk Analyst", value: 8 },
          { name: "Compliance Specialist", value: 9 },
          { name: "Compliance Lead", value: 10 },
        ],
      },
      {
        type: "list",
        message: "Who is their manager?",
        name: "manager",
        choices: [
          {
            name: "Luca DJ",
            value: 2,
          },
          {
            name: "Peter Salesguy",
            value: 3,
          },
          {
            name: "B Forehand",
            value: 6,
          },
          {
            name: "Maria Sheet",
            value: 8,
          },
          {
            name: "Niamh Frost",
            value: 10,
          },
        ],
      },
    ]);
    addEmployee(data);
  } catch (err) {
    console.log("There was an error.");
  }
};

const init = () => {
  inquirer.prompt(mainMenuPrompt).then((answer) => {
    const { choices } = answer;
    switch (choices) {
      case "View All Employees":
        viewEmployees();
        break;
      case "Add Employee":
        addEmployeePrompt();
        break;
      case "View All Roles":
        viewRoles();
        break;
      case "Add Role":
        addRolePrompt();
        break;
      case "View All Departments":
        viewDepartment();
        break;
      case "Add Department":
        addDepartmentPrompt();
        break;
    }
  });
};
