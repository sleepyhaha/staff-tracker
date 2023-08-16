INSERT INTO department (name) 
VALUES
    ("Customer Success"),
    ("Sales"),
    ("Engineering"),
    ("Risk"),
    ("Compliance");

INSERT INTO role (title, salary, department_id)
VALUES
    ("CSA", 70000, 1),
    ("CS Lead", 120000, 1),
    ("Account Executive", 100000, 2),
    ("BDR", 80000, 2), 
    ("Software Engineer", 140000, 3),
    ("Tech Lead", 160000, 3),
    ("Fraud Analyst", 80000, 4),
    ("Credit Risk Analyst", 90000, 4),
    ("Compliance Specialist", 80000, 5),
    ("Compliance Lead", 120000, 5);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES
    ("John", "Doe", 1, 2),
    ("Luca", "DJ", 2, NULL),
    ("Peter", "Salesguy", 3, NULL),
    ("Lawrence", "Coldcaller", 4, 3),
    ("B", "Coolman", 5, 6),
    ("B", "Forehand", 6, NULL),
    ("Zak", "Done", 7, 8),
    ("Maria", "Sheet", 8, NULL),
    ("Kenny", "Dud", 9, 10),
    ("Niamh", "Frost", 10, NULL);