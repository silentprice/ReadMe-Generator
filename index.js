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
    }
]).then(answers => {
    fs.writeFile('README.md', generateMarkdown(answers), (err) => {
        if (err) throw err;
        console.log('ReadMe file has been created!')
    })
})