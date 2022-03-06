const Manager = require('../lib/Manager');

test('Check if a Manager object is created', () => {
    const manager = new Manager('Philip', '35', 'phil.boss@iamtheboss.com');

    expect(manager).toEqual(expect.any(Object));
});

test('Check if parameters are being used properly', () => {
    const manager = new Manager('Philip', '35', 'phil.boss@iamtheboss.com', '101');

    expect(manager.name).toBe('Philip');
    expect(manager.id).toBe('35');
    expect(manager.email).toBe('phil.boss@iamtheboss.com');
    expect(manager.officeNumber).toBe('101');
});

test('Gets the role of the Manager', () => {
    const manager = new Manager('Philip', '35', 'phil.boss@iamtheboss.com');

    expect(manager.getRole()).toBe('Manager');
});