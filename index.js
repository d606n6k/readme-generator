// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');

// TODO: Create an array of questions for user input
const questions = [{
    /* Pass your questions in here */
    type: 'input',
    message: 'What is your name?',
    name: 'username',
  },
  {
    type: 'input',
    message: 'Where are you located?',
    name: 'location',  
},
{
    type: 'input',
    message: 'Tell us about yourself',
    name: "bio",
},
{
    type: 'input',
    message: 'What is your LinkedIn URL?',
    name: 'linkedin',
},
{
    type: 'input',
    message: 'What is your Github URL?',
    name: 'github',
},];

inquirer
  .prompt(questions)
  .then()
  .then();

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {
// prompt user

// then call generateMarkdown

// then write the file


}

// Function call to initialize app
init();
