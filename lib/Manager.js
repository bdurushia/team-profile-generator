const Employee = require('./Employee');

// class Manager constructor Object, extends Employee
// officeNumber, GetRole() // ==> Overridden to return 'Manager'
class Manager extends Employee {
    constructor(name, id, email, officeNumber) {
        super(name, id, email);

        this.officeNumber = officeNumber;
        this.role = 'Manager';
    }

    getRole() {
        return this.role;
    }
}

module.exports = Manager;