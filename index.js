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
