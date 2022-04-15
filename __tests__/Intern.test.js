const Intern = require('../lib/Intern.js');

// create intern object 
test("creates intern object", () => {
    const intern = new Intern('John', 5, 'john@fakemail.com', '2University');

    expect(intern.school).toEqual(expect.any(String));
});

// tests school function 
test("gets school info", () => {
    const intern = new Intern('John', 5, 'john@fakemail.com', '2University');

    expect(intern.getSchool()).toEqual(expect.any(String));
});

// gets role info 
test("gets role", () => {
    const intern = new Intern('John', 5, 'john@fakemail.com', '2University');

    expect(intern.getRole()).toEqual('Intern');
});