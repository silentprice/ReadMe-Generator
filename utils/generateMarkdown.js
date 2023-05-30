// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license === 'MIT') {
    return `[![License](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)`
  }
  if (license === 'Apache-2.0') {
    return `[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`
  }
  if (license === 'GPL-3.0') {
    return `[![License](https://img.shields.io/badge/License-GPL_3.0-blue.svg)](https://opensource.org/licenses/GPL-3.0)`
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

## Description
* ${data.description}

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)

## Installation
${data.installation}

## Usage
${data.usage}

## License
This application is covered under the ${renderLicenseBadge(data.license)} ${data.license} license.


## Contributing
${data.contributing}

## Tests
${data.tests}

## Questions
For any questions or concerns regarding this project, please reach out to me on GitHub or via email:

GitHub: [${data.githubUsername}](https://github.com/${data.githubUsername})
Email: ${data.emailAddress}
`;
}
module.exports = generateMarkdown;

