// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer')
const generateMd = require('./utils/generateMarkdown.js')
// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'name',
        message: 'What is your name?',
        validate: nameInput => {
            if (nameInput) {
                return true;
            } else {
                console.log('Please enter your name.');
                return false
            }
        }
    },
    {
        type: 'input',
        name: 'github',
        message: 'What is your Github Username?',
        validate: githubInput => {
            if (githubInput) {
                return true;
            } else {
                console.log('Please enter your Github Username.');
                return false
            }
        }
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is your email address?',
        validate: emailInput => {
            if (emailInput) {
                return true;
            } else {
                console.log('Please enter your email address.');
                return false
            }
        }
    },
    {
        type: 'input',
        name: 'title',
        message: 'What is the title of your project?',
        validate: titleInput => {
            if (titleInput) {
                return true;
            } else {
                console.log('Please enter the title of your project.');
                return false
            }
        }
    },
    {
        type: 'input',
        name: 'description',
        message: 'Please submit a short description of your project.',
        validate: descInput => {
            if (descInput) {
                return true;
            } else {
                console.log('Please enter a description.');
                return false
            }
        }
    },
    {
        type: 'confirm',
        name: 'confirmLicense',
        message: 'Would you like to include a license?',
        default: false
    },
    {
        type: 'list',
        name: 'license',
        message: 'What license would you like?',
        choices: ['mit', 'gpl', 'wtfpl'],
        when: ({ confirmLicense }) => {
            if (confirmLicense) {
                return true;
            } else {
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'install',
        message: 'What would you like the user to know about installation?',
        validate: installInput => {
            if (installInput) {
                return true;
            } else {
                console.log('Please submit installation instructions.');
                return false
            }
        }
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Provide instructions for use.',
        validate: usageInput => {
            if (usageInput) {
                return true;
            } else {
                console.log('Provide instructions for use.');
                return false
            }
        }
    },
    {
        type: 'input',
        name: 'test',
        message: 'Describe any tests written for the application',
        validate: testInput => {
            if (testInput) {
                return true;
            } else {
                console.log('Please submit test instructions.');
                return false
            }
        }
    },
    {
        type: 'input',
        name: 'contributors',
        message: 'Enter guidelines for contributing.',
        validate: contInput => {
            if (contInput) {
                return true;
            } else {
                console.log('Please submit installation instructions.');
                return false
            }
        }
    }
]

// TODO: Create a function to write README file
const writeToFile = data => {
    fs.writeFile('README.md', data, err => {
        if (err) {
            console.log(err);
            return;
        } else {
            console.log('Your README has been created.');
        }
    })
}
// TODO: Create a function to initialize app
const init = () => {
    return inquirer.prompt(questions);
}

// Function call to initialize app
init()
    .then(answers => {
        return generateMd(answers);
    })

    .then(data => {
        return writeToFile(data);
    })