// import inquirer and filesystem
const inquirer = require('inquirer');
const fs = require('fs');

// import render page modules
const generatePage = require('./src/page-template');
const { writeFile, copyFile} = require('./utils/generate-site');

// import class Objects
const Manager = require('./lib/Manager');
const Ingineer = require('./lib/Engineer');
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
        const manager = new Manager(answers.managerName, 
            parseInt(answers.managerId), 
            answers.managerEmail, 
            parseInt(answers.officeNumber), 
            answers.manager);

        myTeam.push(manager);
        // function to ask if they'd like to add another member to their team
    })
};

// Prompt user, ask if you'd like to add another member, choose type

// Inquirer Questions; Add Engineer

// Inquirer Questions; Add Intern

addManager();