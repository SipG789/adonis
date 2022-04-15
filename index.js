//TODO: dist=== rendered output (HTML) and CSS style sheet
const fs = require("fs");
const inquirer = require("inquirer");
// add js files for employee, engineer, intern, manager 
const Employee = require("./lib/Employee");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const Manager = require("./lib/Manager");
const generatePage = require('./src/generatePage.js')

//TODO: add class for role prompt to enter the team manager’s name, employee ID, email address, and office number

const promptManager = () => {
    return inquirer.prompt([
        {
            // manager role info
            type: "input",
            name: "title",
            message: "Manager Role: What is your name? (Required)",
            validate: (titleInput) => {
                if (titleInput) {
                    return true;
                } else {
                    console.log("Please enter your name!");
                    return false;
                }
            },
        },
        {
            // manager id info
            type: "input",
            name: "id",
            message: "What is your Employee ID? (Required)",
            validate: (idInput) => {
                if (idInput) {
                    return true;
                } else {
                    console.log("Please enter your Employee ID!");
                    return false;
                }
            },
        },
        {
            // manager email info
            type: "input",
            name: "email",
            message: "What is your email? (Required)",
            validate: (emailInput) => {
                if (emailInput) {
                    return true;
                } else {
                    console.log("Please enter your email!");
                    return false;
                }
            },
        },
        {
            // manager office number info
            type: "input",
            name: "officeNumber",
            message: "What is your office number? (Required)",
            validate: (officeNumberInput) => {
                if (officeNumberInput) {
                    return true;
                } else {
                    console.log("Please enter your office number!");
                    return false;
                }
            },
        }

    ]);
};

const newEmployee = employeeData => {
    console.log(`
==================
Add a New Employee
==================    
    `);
    // if there is no array property, create one
    if (!employeeData.info) {
        employeeData.info = [];
    }
    return inquirer.prompt([
        {
            // employee role 
            type: 'checkbox',
            name: 'role',
            message: 'What is your role',
            choices: ['Engineer', 'Intern']
        },
        {
            // employee name
            type: 'input',
            name: 'empName',
            message: 'What is your name? (Required)',
            validate: empName => {
                if (empName) {
                    return true;
                } else {
                    console.log('Please enter your name!');
                    return false;
                }
            }
        },
        {
            // employee id
            type: 'input',
            name: 'id',
            message: 'What is your Employee ID? (Required)',
            validate: idName => {
                if (idName) {
                    return true;
                } else {
                    console.log('Please enter your Employee ID!');
                    return false;
                }
            }
        },
        {
            // employee email
            type: 'input',
            name: 'email',
            message: 'What is your Employee Email? (Required)',
            validate: emailName => {
                if (emailName) {
                    return true;
                } else {
                    console.log('Please enter your Employee ID!');
                    return false;
                }
            }
        },
        {
            // employee github
            type: 'input',
            name: 'github',
            message: 'What is your Github username? (Required)',
            validate: githubName => {
                if (githubName) {
                    return true;
                } else {
                    console.log('Please enter your Github username!');
                    return false;
                }
            }
        },
        {
            // employee school
            type: 'input',
            name: 'school',
            message: 'What is your school name? (Required)',
            validate: schoolName => {
                if (schoolName) {
                    return true;
                } else {
                    console.log('Please enter your school name!');
                    return false;
                }
            }
        }
])
    .then(workData => {
        employeeData.info.push(workData);
        if (workData.confirmAddData) {
            return newEmployee(employeeData);
        } else {
            return employeeData;
        }
    });
};

const writeFile = fileContent => {
    return new Promise((resolve, reject) => {
        fs.writeFile('./dist/index.html', fileContent, err => {
            // if there is an error, reject the PRomise and send the error to the Promises .catch method
            if (err) {
                reject (err);
                // return out of the function here to make sure the promise doesnt accidentally execute the ressolve function as well 
                return;
            }

            // if everything went well, resolve the Promise and send the successful data to the .then method
            resolve({
                ok: true,
                message: 'File Created!'
            });
        });
    });
};

const copyFile = () => {
    return new Promise((resolve, reject) => {
        fs.copyFile('./src/style.css', './dist/style.css', err => {
            if (err) {
              reject (err);
              return;
            }
            resolve({
                ok: true,
                message: 'Style sheet copied successfully!'
          });
    });
    });
};

//TODO: enter the engineer’s name, ID, email, and GitHub username, and I am taken back to the menu for engineer

//TODO: enter the intern’s name, ID, email, and school, and I am taken back to the menu for intern

//TODO: add css style
//TODO: src=== template helper code

//TODO: initialize app
promptManager()
    .then(newEmployee)
    .then(employeeData => {
        return generatePage(employeeData);
    })
    .then(pageHTML => {
        return writeFile(pageHTML);
    })
    .then(writeFileResponse => {
        console.log(writeFileResponse);
        return copyFile();
    })
    .then(copyFileResponse => {
        console.log(copyFileResponse);
    })
    .catch(err => {
        console.log(err);
    });
