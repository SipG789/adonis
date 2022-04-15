const Employee = require('../lib/Employee.js');

test('creates an employee object', () => {
    const employee = new Employee('Alec', 2, 'alec@fakeemail.com');

    expect(employee.name).toEqual(expect.any(String));
    expect(employee.id).toEqual(expect.any(Number));
    expect(employee.email).toEqual(expect.any(String));
});

test("gets employee's name", () => {
    const employee = new Employee('Alec', 2, 'alec@fakeemail.com');

    expect(employee.getName()).toEqual(expect.any(String));
});

test("gets employee's id", () => {
    const employee = new Employee('Alec', 2, 'alec@fakeemail.com');

    expect(employee.getId()).toEqual(expect.any(Number));
});

test("gets employee's email", () => {
    const employee = new Employee('Alec', 2, 'alec@fakeemail.com');

    expect(employee.getEmail()).toEqual(expect.any(String));
});

test("gets employee's role", () => {
    const employee = new Employee('Alec', 2, 'alec@fakeemail.com');

    expect(employee.getRole()).toEqual('Employee');
});

