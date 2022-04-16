const managerQuestions = [
    {
      // manager role info
      type: "input",
      name: "name",
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
    },
  ];
  const engineerQuestions = [
      {
          // employee name
          type: "input",
          name: "name",
          message: "What is your name? (Required)",
          validate: (empName) => {
            if (empName) {
              return true;
            } else {
              console.log("Please enter your name!");
              return false;
            }
          },
        },
        {
          // employee id
          type: "input",
          name: "id",
          message: "What is your Employee ID? (Required)",
          validate: (idName) => {
            if (idName) {
              return true;
            } else {
              console.log("Please enter your Employee ID!");
              return false;
            }
          },
        },
        {
          // employee email
          type: "input",
          name: "email",
          message: "What is your Employee Email? (Required)",
          validate: (emailName) => {
            if (emailName) {
              return true;
            } else {
              console.log("Please enter your Employee ID!");
              return false;
            }
          },
        },
        {
          // employee github
          type: "input",
          name: "github",
          message: "What is your Github username? (Required)",
          validate: (githubName) => {
            if (githubName) {
              return true;
            } else {
              console.log("Please enter your Github username!");
              return false;
            }
          },
        },
  ];

const internQuestions = [
    {
        // employee name
        type: "input",
        name: "name",
        message: "What is your name? (Required)",
        validate: (empName) => {
          if (empName) {
            return true;
          } else {
            console.log("Please enter your name!");
            return false;
          }
        },
      },
      {
        // employee id
        type: "input",
        name: "id",
        message: "What is your Employee ID? (Required)",
        validate: (idName) => {
          if (idName) {
            return true;
          } else {
            console.log("Please enter your Employee ID!");
            return false;
          }
        },
      },
      {
        // employee email
        type: "input",
        name: "email",
        message: "What is your Employee Email? (Required)",
        validate: (emailName) => {
          if (emailName) {
            return true;
          } else {
            console.log("Please enter your Employee ID!");
            return false;
          }
        },
      },
      {
        // employee school
        type: "input",
        name: "school",
        message: "What is your school name? (Required)",
        validate: schoolName => {
            if (schoolName) {
                return true;
            } else {
                console.log('Please enter your school name!');
                return false;
            }
        }
      }
];


module.exports = {managerQuestions, engineerQuestions, internQuestions}; 