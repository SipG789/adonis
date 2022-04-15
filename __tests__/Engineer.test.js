const Engineer = require('../lib/Engineer.js');

//TODO: in addition to employee info we need 'github' & 'getGithub()'
test("creates a engineer object", () => {
    const engineer = new Engineer('Grace', 3, 'grace@fakemail.com', 'gchoi2u');

    expect(engineer.github).toEqual(expect.any(String));
});

test("gets github account info", () => {
    const engineer = new Engineer('Grace', 3, 'grace@fakemail.com', 'gchoi2u');

    expect(engineer.getGithub()).toEqual(expect.any(String));
});

test("gets role", () => {
    const engineer = new Engineer('Grace', 3, 'grace@fakemail.com', 'gchoi2u');

    expect(engineer.getRole()).toEqual('Engineer');
});