// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');

const generateReadme = require("./utils/generateMarkdown")
// TODO: Create an array of questions for user input
const questions = [{
    type: 'input',
    name: "title",
    message: "What's the title of your repository"
},
// {
//     type: 'input',
//     name: "installation"
//     message:
// },
// {
//     type: 'input',
//     name:
//         message
// },
// {
//     type: 'input',
//     name:
//         message
// },
// {
//     type: 'input',
//     name:
//         message
// },
// {
//     type: 'input',
//     name:
//         message
// }
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
