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

const viewRoles = () => {
  db.query(
    `SELECT role.id, 
    role.title,
    role.salary,
    department.name AS department
    FROM role
    JOIN department
    ON role.department_id = department.id;`,
    (err, result) => {
      if (err) {
        console.log(err);
      }
      console.log(result);
    }
  );
};

const viewDepartment = () => {
  db.query(
    `SELECT *
        FROM department`,
    (err, result) => {
      if (err) {
        console.log(err);
      }
      console.log(result);
    }
  );
};

const addDepartment = (data) => {
  db.query(
    `INSERT INTO department (name)
  VALUES (${data.response});`,
    (err, result) => {
      if (err) {
        console.log(err);
      }
      console.log("Department added", result);
    }
  );
  viewDepartment();
};

const addRole = (data) => {
  db.query(
    `INSERT INTO role (title, salary, department_id)
  VALUES (${data.title}, ${data.salary}, ${data.department_id})`,
    (err, result) => {
      if (err) {
        console.log(err);
      }
      console.log("Role added", result);
    }
  );
};

const addEmployee = (data) => {
  db.query(
    `INSERT INTO employess (first_name, last_name, role_id, manager_id)
  VALUES (${data.firstName}, ${data.lastName}, ${data.role.value}, ${data.manager.value})`,
    (err, result) => {
      if (err) {
        console.log(err);
      }
      console.log("Employee added", result);
    }
  );
};

module.exports = {
  viewEmployees,
  viewRoles,
  viewDepartment,
  addDepartment,
  addEmployee,
  addRole,
};
