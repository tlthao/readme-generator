// TODO: Include packages needed for this application

const inquirer = require("inquirer");
const fs = require("fs");
const util = require("util");
const license = require("./utils/generateMarkdown");

const writeFileAsync = util.promisify(fs.writeFile);
// TODO: Create an array of questions for user input

const questions = () => {
  return inquirer.prompt([
    {
      type: "input",
      name: "title",
      message: "What is the project title?",
    },
    {
      type: "input",
      name: "description",
      message: "Please provide a description of the project.",
    },
    {
      type: "input",
      name: "installation",
      message: "Please provide installation instructions.",
    },
    {
      type: "input",
      name: "usage",
      message: "Please provide usage information",
    },
    {
      type: "input",
      name: "contribution",
      message: "Please provide contribution guidelines",
    },
    {
      type: "input",
      name: "test",
      message: "Please provide test instructions",
    },
    {
      type: "list",
      name: "license",
      message: "Please select license",
      choices: [
        "No License",
        "Apache",
        "Boost",
        "BSD",
        "Creative Commons",
        "Eclipse",
        "GNU",
        "IBM",
        "ISC",
        "MIT",
        "Mozilla",
      ],
    },
    {
      type: "input",
      name: "github",
      message: "Please enter github username.",
    },
    {
      type: "input",
      name: "email",
      message: "Please enter email address.",
    },
  ]);
};
// TODO: Create a function to write README file
const readMe = (answers) => {
  const badge = license(answers.license);
  const message = `
    ${badge}
  # ${answers.title}
  # Table of contents
  * [Description](#Description)
  * [Installation](#Installation)
  * [Usage](#Usage)
  * [Contributing](#Contributing)
  * [Tests](#Tests)
  * [Questions](#Questions)
  # Description
  ${answers.description}
  # Installation
  ${answers.installation}
  # Usage
  ${answers.usage}
  # Contributing
  ${answers.contribution}
  # Tests
  ${answers.test}
  # Questions
  * Github: [${answers.github}](https://github.com/${answers.github})
  * Email: ${answers.email}
  `;
  return message;
};
// TODO: Create a function to initialize app
const init = () => {
  questions()
    .then((answers) => writeFileAsync("README.md", readMe(answers)))
    .then(() => console.log("Successfully created README.md!"))
    .catch((err) => console.log(err));
};

// Function call to initialize app
init();
