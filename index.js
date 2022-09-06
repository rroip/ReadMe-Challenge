// TODO: Include packages needed for this application
const readmeGen =  require("./utils/generateMarkdown");
const fs = require("fs");
const path = require("path");
const inquirer = require("inquirer");

// TODO: Create an array of questions for user input
const questions = [
  {
        type: "input",
        message: "What is your GitHub username?",
        name: "github"
    },{
        type: "input",
        message: "What is your email address?",
        name: "email"
    },{
        type: "input",
        message: "What is the name of your project?",
        name: "project_name"
    },{
        type: "input",
        message: "Please provide a short description of your project.",
        name: "description"
    },{
        type: "list",
        message: "What kind of license should your project have?",
        name: "licenses",
        choices: ['MIT', 'APACHE 2.0', 'GPL 3.0', 'BSD 3', 'none'],
       
    },{
        type: "input",
        message: "What command should be run to install dependencies?",
        name: "intall_dependencies",
        default: "npm install"
    },{
        type: "input",
        message: "What command should be run to run tests?",
        name: "run_tests",
        default: "npm run test"
    },{
        type: "input",
        message: "What does the user need to know about using the repo?",
        name: "using_repo"
    },{
        type: "input",
        message: "What does the user need to know about contributing to the repo?",
        name: "contribution"
    }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    return fs.writeFileSync(path.join(process.cwd(),"/dist",fileName),data)
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then(response => {
        writeToFile("README.md",readmeGen(response))
        console.log('Success! Your file is in dist folder')
    })
}

// Function call to initialize app
init();
