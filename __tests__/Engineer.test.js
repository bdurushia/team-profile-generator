const Engineer = require('../lib/Engineer');

test('Checks if an Engineer object is created', () => {
    const engineer = new Engineer('고효주', '33', 'rgsg.hyojoo@gmail.com', 'misskohyojoo');

    expect(engineer).toEqual(expect.any(Object));
});

test('Checks if parameters are being used properly', () => {
    const engineer = new Engineer('고효주', '33', 'rgsg.hyojoo@gmail.com', 'misskohyojoo');

    expect(engineer.name).toBe('고효주');
    expect(engineer.id).toBe('33');
    expect(engineer.email).toBe('rgsg.hyojoo@gmail.com');
});

test('Gets the GitHub username of the Engineer', () => {
    const engineer = new Engineer('고효주', '33', 'rgsg.hyojoo@gmail.com', 'misskohyojoo');

    expect(engineer.getGithub()).toEqual(expect.stringContaining(engineer.github.toString()));
});

test('Gets the role of the Engineer', () => {
    const engineer = new Engineer('고효주', '33', 'rgsg.hyojoo@gmail.com', 'misskohyojoo');

    expect(engineer.getRole()).toBe('Engineer');
});