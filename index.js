// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');

const generateReadme = require("./utils/generateMarkdown")
// TODO: Create an array of questions for user input
const questions = [{
    type: 'input',
    name: 'title',
    message: 'Whats the title of your repository?',
},
{
    type: 'input',
    name: 'description',
    message: 'What is ths project about? Give a detailed description of your project',
},
{
    type: 'input',
    name: 'table of contents',
    message: 'Table of contents',
},
{
    type: 'input',
    name: 'installation',
    message: 'What does the user need to install to run this app',
},
{
    type: 'input',
    name: 'usage',
    message: 'How is this app used? Give instructions',
},
{
    type: 'input',
    name: 'credits',
    message: 'Who contributed to this project?',
},
{
    type: 'input',
    name: 'license',
    message: 'What license is being used?',
},
{
    type: 'input',
    name: 'badges',
    message: 'What badges are being used for this app?',

    type: 'input',
    name: 'features',
    message: 'What features does the app use?',

    type: 'input',
    name: 'how to contribute',
    message: '',

    type: 'input',
    name: 'tests',
    message: 'What commands are needed to test this app',
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
