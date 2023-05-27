// TODO: Include packages needed for this application
const inquirer = require('inquirer')
const fs = require('fs')
const generateMarkdown = require('./utils/generateMarkdown')

inquirer.prompt([
    {
        type: "input",
        name: "title",
        message: "What is the title of your project?"
    },
    {
        type: "input",
        name: "description",
        message: "Please give a detailed description about you project."
    },
    {
        type: "input",
        name: "installation",
        message: "Enter installation instructions:"
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Enter usage information:'
      },
      {
        type: 'input',
        name: 'contributing',
        message: 'Enter contribution guidelines:'
      },
      {
        type: 'input',
        name: 'tests',
        message: 'Enter test instructions:'
      },
      {
        type: 'list',
        name: 'license',
        message: 'Choose a license for your application:',
        choices: ['MIT', 'Apache-2.0', 'GPL-3.0']
      },
      {
        type: 'input',
        name: 'githubUsername',
        message: 'Enter your GitHub username:'
      },
      {
        type: 'input',
        name: 'emailAddress',
        message: 'Enter your email address:'
      }
    ]).then(answers => {
    fs.writeFile('README.md', generateMarkdown(answers), (err) => {
        if (err) throw err;
        console.log('ReadMe file has been created!')
    })
})