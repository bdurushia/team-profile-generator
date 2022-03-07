// import inquirer and filesystem
const inquirer = require('inquirer');
const fs = require('fs');

// import render page modules
const generatePage = require('./src/page-template');

// import class Objects
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');

const myTeam = [];

// Inquirer Questions; Starts program; Add Manager 
const addManager = () => {
    console.log('Lets get building your team! We will start with the Manager.');
    return inquirer.prompt([
        {
            type: 'input',
            name: 'managerName',
            message: 'MANAGER NAME - Enter the name of the manager:',
            validate: answer => {
                if (answer) {
                    return true;
                } else {
                    console.log('You must enter the name of the manager!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'managerId',
            message: 'MANAGER ID (number) - Enter the ID for the manager:',
            validate: answer => {
                if (isNaN(answer) || !answer) {
                    console.log('You must enter an ID, and it must be a number!');
                    return false;
                } else {
                    return true;
                }
            }
        },
        {
            type: 'input',
            name: 'managerEmail',
            message: 'MANAGER EMAIL - Enter an Email address for the manager:',
            validate: answer => {
                let emailFormat = answer.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/); // Found email validation formatting here: https://stackoverflow.com/questions/46155/whats-the-best-way-to-validate-an-email-address-in-javascript
                if (emailFormat) {
                    return true;
                } else {
                    console.log('You must enter a valid email address!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'officeNumber',
            message: "OFFICE NUMBER - Enter the manager's office number:",
            validate: answer => {
                if (isNaN(answer) || !answer) {
                    console.log('You must enter an office number, and it must be a number!');
                    return false;
                } else {
                    return true;
                }
            }
        }
    ])
    .then(answers => {
        const manager = new Manager(
            answers.managerName, 
            parseInt(answers.managerId), 
            answers.managerEmail, 
            parseInt(answers.officeNumber), 
            answers.manager);

        myTeam.push(manager);
        addMember();
        // function to ask if they'd like to add another member to their team
    });
};

// Prompt user, ask if they'd like to add another member, choose role
function addMember() {
    return inquirer.prompt([
        {
            type: 'confirm',
            name: 'confirmAddMember',
            message: 'Would you like to add another team member?',
            default: true
        },
        {
            type: 'list',
            name: 'memberRole',
            message: 'Choose the role of the your member:',
            choices: ['Engineer', 'Intern'],      
            when: ({ confirmAddMember }) => {
                if (confirmAddMember) {
                    return true;
                } else {
                    return false;
                }
            }
        }
    ])
    .then(choice => {
        let role = choice.memberRole;
        choice: if (role === 'Engineer') {
            addEngineer();
            break choice;
        } else if (role === 'Intern') {
            addIntern();
            break choice;
        } else {
            buildTeam();
            break choice;
        }
    });
};

// Inquirer Questions; Add Engineer
const addEngineer = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'engineerName',
            message: 'ENGINEER NAME - Enter the name of your engineer:',
            validate: answer => {
                if (answer) {
                    return true;
                } else {
                    console.log('You must enter the name of your engineer!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'engineerId',
            message: 'ENGINEER ID (number) - Enter the ID for the engineer:',
            validate: answer => {
                if (isNaN(answer) || !answer) {
                    console.log('You must enter an ID, and it must be a number!');
                    return false;
                } else {
                    return true;
                }
            }
        },
        {
            type: 'input',
            name: 'engineerEmail',
            message: 'ENGINEER EMAIL - Enter an Email address for the engineer:',
            validate: answer => {
                let emailFormat = answer.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/); // Found email validation formatting here: https://stackoverflow.com/questions/46155/whats-the-best-way-to-validate-an-email-address-in-javascript
                if (emailFormat) {
                    return true;
                } else {
                    console.log('You must enter a valid email address!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'githubUsername',
            message: "GITHUB USERNAME - Enter the engineer's GitHub Username:",
            validate: answer => {
                if (answer) {
                    return true;
                } else {
                    console.log('You must enter the GitHub username for your engineer!');
                    return false;
                }
            }
        }
    ])
    .then(answers => {
        const engineer = new Engineer(
            answers.engineerName, 
            parseInt(answers.engineerId), 
            answers.engineerEmail, 
            answers.githubUsername, 
            answers.engineer);

        myTeam.push(engineer);
        addMember();
    });
};

// Inquirer Questions; Add Intern
const addIntern = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'internName',
            message: 'INTERN NAME - Enter the name of your intern:',
            validate: answer => {
                if (answer) {
                    return true;
                } else {
                    console.log('You must enter the name of your intern!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'internId',
            message: 'INTERN ID (number) - Enter the ID for the intern:',
            validate: answer => {
                if (isNaN(answer) || !answer) {
                    console.log('You must enter an ID, and it must be a number!');
                    return false;
                } else {
                    return true;
                }
            }
        },
        {
            type: 'input',
            name: 'internEmail',
            message: 'INTERN EMAIL - Enter an Email address for the intern:',
            validate: answer => {
                let emailFormat = answer.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/); // Found email validation formatting here: https://stackoverflow.com/questions/46155/whats-the-best-way-to-validate-an-email-address-in-javascript
                if (emailFormat) {
                    return true;
                } else {
                    console.log('You must enter a valid email address!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'schoolName',
            message: "SCHOOL/UNIVERSITY NAME - Enter the name of the intern's school/university:",
            validate: answer => {
                if (answer) {
                    return true;
                } else {
                    console.log("You must enter the name for your intern's school!");
                    return false;
                }
            }
        }
    ])
    .then(answers => {
        const intern = new Intern(
            answers.internName, 
            parseInt(answers.internId), 
            answers.internEmail, 
            answers.schoolName, 
            answers.intern);

        myTeam.push(intern);
        addMember();
    });
};

function buildTeam() {
    fs.writeFileSync('./dist/index.html', generatePage(myTeam), err => {
        if (err) {
            console.log(err);
            return;
        } else {
            return;
        }
    });

    fs.copyFile('./src/style.css', './dist/style.css', err => {
        if (err) {
            reject (err);
            return;
        } else {
            console.log('Success! File is index.html, written to the /dist folder.');
            return console.log('Success! File copied to the /dist folder.');
        }
    });
}

addManager();