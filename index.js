//TODO: dist=== rendered output (HTML) and CSS style sheet
const fs = require("fs");
const inquirer = require("inquirer");
// add js files for employee, engineer, intern, manager
const Employee = require("./lib/Employee");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const Manager = require("./lib/Manager");
const generatePage = require("./src/generatePage.js");
const { managerQuestions, engineerQuestions, internQuestions } = require("./lib/questions.js");
const team = [];
let manager = {};

const promptManager = () => {
    inquirer
    .prompt(managerQuestions)
    .then(answers => {
        manager = new Manager(
            answers.name,
            answers.id,
            answers.email,
            answers.officeNumber
          );
        addEmployee();
    })
};

//TODO: add class for role prompt to enter the team manager’s name, employee ID, email address, and office number
const addEmployee = () => {
  inquirer
    .prompt([
      {
        type: "list",
        name: "listRole",
        message: "What type of employee would you like to add?",
        choices: ["Engineer", "Intern", "Exit"],
      },
    ])
    .then((answer) => {
      switch (answer.listRole) {
        case "Engineer":
          promptEmployee(engineerQuestions, "Engineer");
          break;
        case "Intern":
          promptEmployee(internQuestions, "Intern");
          break;
        case "Exit": 
        let teamData = { ...manager, team: team };
          if (team.length > 0) {
            fileOperations(teamData);
          } else {
              fileOperations(teamData);
            console.log("No team data! Writing manager and exiting program!");
            return;
          }
        default:
          break;
      }
    });
};

const promptEmployee = (questions, employeeType) => {
  inquirer.prompt(questions).then((answers) => {
    let employee = {};
    switch (employeeType) {
      case "Engineer":
        employee = new Engineer(
          answers.name,
          answers.id,
          answers.email,
          answers.github
        );
        break;
      case "Intern":
        employee = new Intern(
          answers.name,
          answers.id,
          answers.email,
          answers.school
        );
        break; 
      default:
        break;
    }
    console.log(employee);
    if (employeeType !== "Manager") {
      team.push(employee);
    }

    addEmployee();
  });
};


const fileOperations = (answers) => {
  fs.writeFileSync("./dist/index.html", generatePage(answers));

  fs.copyFileSync("./src/style.css", "./dist/style.css");
  console.log("Operations Complete!");
};


//TODO: initialize app
promptManager();

