const Manager = require('../lib/Manager.js');


// create Manager object 
test("creates manager object", () => {
    const manager = new Manager('Jared', 1, 'jared@fakemail.com', 1);

    expect(manager.officeNumber).toEqual(expect.any(Number));
});

// get role 
test("gets role of manager", () => {
    const manager = new Manager('Jared', 1, 'jared@fakemail.com', 1);

    expect(manager.getRole()).toEqual('Manager');
});