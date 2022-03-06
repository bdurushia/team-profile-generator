const Employee = require('./Employee');

// class Engineer constructor Object, extends Employee
// github ==> GitHub username, getGithub(), GetRole() // ==> Overridden to return 'Engineer'
class Engineer extends Employee {
    constructor(name, id, email, github) {
        super(name, id, email);

        this.github = github;
        this.role = 'Engineer';
    }

    getGithub() {
        return this.github;
    }

    getRole() {
        return this.role;
    }
}

module.exports = Engineer;