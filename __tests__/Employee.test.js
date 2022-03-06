const Employee = require('../lib/Employee');

test('Creates an Employee Object', () => {
    const employee = new Employee('James', '23', 'james@gmail.com');

    expect(employee).toEqual(expect.any(Object));
});

test('Checks to see if the Employee parameters are being used properly', () => {
    const employee = new Employee('James', '23', 'james@gmail.com');

    expect(employee.name).toBe('James');
    expect(employee.id).toBe('23');
    expect(employee.email).toBe('james@gmail.com');
})

test('Gets the name of the Employee', () => {
    const employee = new Employee('James', '23', 'james@gmail.com');

    expect(employee.getName()).toEqual(expect.stringContaining(employee.name.toString()));
});

test('Gets the ID of an Employee', () => {
    const employee = new Employee('James', '23', 'james@gmail.com');

    expect(employee.getId()).toEqual(expect.stringContaining(employee.id.toString()));
})

test('Gets the email address of an Employee', () => {
    const employee = new Employee('James', '23', 'james@gmail.com');

    expect(employee.getEmail()).toEqual(expect.stringContaining(employee.email.toString()));
})

test('Gets the role of the Employee', () => {
    const employee = new Employee('James', '23', 'james@gmail.com');

    expect(employee.getRole()).toBe('Employee');
})