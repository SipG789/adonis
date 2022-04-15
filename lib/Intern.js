// need to get parent info from employee
const Employee = require('./Employee.js');

class Intern extends Employee {
    constructor(name, id, email, school) {
        // call parent contructor 
        super(name, id, email);

        this.school = school;
    };

    getSchool() {
        return this.school;
    };

    getRole() {
        return 'Intern';
    };
};



module.exports = Intern;
