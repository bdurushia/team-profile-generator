const Employee = require('./Employee');

// class Engineer constructor Object, extends Employee
// school, getSchool(), getRole() // ==> Overridden to return 'Intern'
class Intern extends Employee {
    constructor(name, id, email, school) {
        super(name, id, email);

        this.school = school;
        this.role = 'Intern';
    }

    getSchool() {
        return this.school;
    }

    getRole() {
        return this.role;
    }
}