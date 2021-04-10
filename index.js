// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');

// TODO: Create an array of questions for user input
const questions = [
    /* Pass your questions in here */
    {
        type: 'input',
        message: 'What is the name of your project?',
        name: 'projName',
    },
    {
        type: 'input',
        message: 'Please describe your project.',
        name: 'projectDescription',
    },
    {
        type: 'list',
        message: 'Enter a usage license:',
        choices:["MIT", "BSD3", "Apache"], 
        name: 'license', 
    },
    {
        type: 'input',
        message: 'What is your Github username?',
        name: "githubUsername",
    },
    {
        type: 'input',
        message: 'What is the email address contributors/users should contact you at?',
        name: 'email',
    },

];

// TODO: Create a function to write README file
// function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {
// prompt user
inquirer
  .prompt(questions)
  .then((data) => {
    const readMeStuff = createReadMe(data);
    const filename = `readme.md`;
    fs.writeFile(filename, readMeStuff, (err) =>
      err ? console.log(err) : console.log('Success!')
    );
  });

// then call generateMarkdown

// then write the file
function createReadMe(questions){
    const readMeStuff =  `# readme-generator
![ReadMe Command Line Image](./assets/images/screenshot.png)

## Description
${questions.projectDescription}
## Table of Contents (Optional)
- [Installation](#installation)
- [Usage](#usage)
- [Credits](#credits)
- [License](#license)

## Badges
![license](https://img.shields.io/badge/license-${questions.license}-blue)

## Installation
   
Run \`npm i\` in the command line terminal.
    
## Usage
    
Run \`node index.js\` in the terminal to be prompted with questions for your readme file!
    
Here is a quick video guide: https://youtu.be/ayl8uqiXHXU
    
## Credits
    
Created by [${questions.githubUsername}](https://github.com/${questions.githubUsername})
    
## License
License: ${questions.license}

## Features
If your project has a lot of features, list them here.

## How to Contribute
If you would like to contribute to this project, please fork the project as needed.

## Questions
Have any questions for the author? Contact this author via [Email](mailto:${questions.email})\n
Check out the author's [Github](mailto:${questions.githubUsername})

## Tests
To run tests, run the following command:
\`npm test\` in the terminal`;
    return readMeStuff;
  };

}

// Function call to initialize app
init();
