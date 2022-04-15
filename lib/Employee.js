//TODO: class for employee, employee id, email address

class Employee {
//TODO: add constructor function add this.name,id,email after then add getName() after but within the class function 
    constructor (name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email 
    };

    getName() {
        return this.name;
    };

    getId() {
        return this.id;
    };

    getEmail() {
        return this.email;
    };

    getRole() {
        return 'Employee';
    };
};






module.exports = Employee;
