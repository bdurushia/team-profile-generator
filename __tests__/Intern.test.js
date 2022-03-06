const Intern = require('../lib/Intern');

test('Checks if an Intern object is created', () => {
    const intern = new Intern('린다', '24', 'h.linda@cs.skku.edu', 'Sung Kyun Kwan University');

    expect(intern).toEqual(expect.any(Object));
})

test('Checks to see if parameters are being used properly', () => {
    const intern = new Intern('린다', '24', 'h.linda@cs.skku.edu', 'Sung Kyun Kwan University');

    expect(intern.name).toBe('린다');
    expect(intern.id).toBe('24');
    expect(intern.email).toBe('h.linda@cs.skku.edu');
})

test('Gets the school of the Intern', () => {
    const intern = new Intern('린다', '24', 'h.linda@cs.skku.edu', 'Sung Kyun Kwan University');

    expect(intern.getSchool()).toEqual(expect.stringContaining(intern.school.toString()));
})
test('Gets the role of the Intern', () => {
    const intern = new Intern('린다', '24', 'h.linda@cs.skku.edu', 'Sung Kyun Kwan University');

    expect(intern.getRole()).toBe('Intern');
})