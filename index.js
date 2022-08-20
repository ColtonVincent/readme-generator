// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');

const generateReadme = require("./utils/generateMarkdown")
// TODO: Create an array of questions for user input
const questions = [{
    type: 'input',
    name: 'title',
    message: 'Whats the title of your repository',
},
{
    type: 'input',
    name: 'installation',
    message: '',
},
{
    type: 'input',
    name: 'usage',
    message: '',
},
{
    type: 'input',
    name: 'credits',
    message: '',
},
{
    type: 'input',
    name: 'license',
    message: '',
},
{
    type: 'input',
    name: 'badges',
    message: '',

    type: 'input',
    name: 'features',
    message: '',

    type: 'input',
    name: 'how to contribute',
    message: '',

    type: 'input',
    name: 'tests',
    message: '',
}
];

// TODO: Create a function to write README file
function writeToFile(data) {
    fs.writeFile(`README.md`, data, (err) =>
        err ? console.err(err) : console.log("Success!"));
}

// TODO: Create a function to initialize app
async function init() {
    try {
        const answers = await inquirer.prompt(questions)
        const genStructure = generateReadme(answers);
        writeToFile(genStructure);
    } catch (err) {
        console.log(err);
    }
}

// Function call to initialize app
init();
