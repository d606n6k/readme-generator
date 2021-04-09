// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');

// TODO: Create an array of questions for user input
const questions = [{
    /* Pass your questions in here */
    type: 'input',
    message: 'Please describe your project.',
    name: 'projectDescription',
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
    message: 'What is your Github username?',
    name: 'github',
},];

inquirer
  .prompt(questions)
  .then((data) => {
    const readMeStuff = createReadMe(data);
    const filename = `readme.md`;
    fs.writeFile(filename, readMeStuff, (err) =>
      err ? console.log(err) : console.log('Success!')
    );
  });

// TODO: Create a function to write README file
// function writeToFile(fileName, data) {}

function createReadMe(){
    const readMeStuff =  `README MARK DOWN HERE`;
    return readMeStuff;
  };

// TODO: Create a function to initialize app
function init() {
// prompt user

// then call generateMarkdown

// then write the file


}

// Function call to initialize app
init();
