// need to get parent info from employee
const Employee = require('./Employee.js');


//TODO: add employee parent function to engineer using class <__> extend <__>
class Engineer extends Employee {
    constructor(name, id, email, github) {
        // call parent constructor here 
        super(name, id, email);

        this.github = github;
    };
    getGithub() {
        return this.github;
    };
    getRole() {
        return 'Engineer';
    };
};




module.exports = Engineer;