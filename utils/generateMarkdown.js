//function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (!license) {
    return ``;
  } else {
    return `[![${license} License](https://img.shields.io/badge/License-${license}-blue.svg)](${renderLicenseLink(license)})`
  }
}

//function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license === 'mit') {
    return `https://www.mit.edu/~amini/LICENSE.md`;
  }
  if (license === 'gpl') {
    return `https://www.gnu.org/licenses/gpl-3.0.en.html`;
  }
  if (license === 'wtfpl') {
    return `http://www.wtfpl.net/about/`
  }
}

//function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (!license) {
    return ``;
  } else {
    return `## License\n
    *This project is covered under the ${license} license:*`
  }
}

//function to generate markdown for README
function generateMarkdown(data) {
  return `# **${data.title}**

## Description

${data.description}

## Table on Contents

* [Installation](#installation)

* [Usage](#usage)

* [License](#license)

* [Contributing](#contributing)

* [Tests](#tests)

* [Questions](#questions)

## Installation

${data.install}

## Usage

${data.usage}

${renderLicenseSection(data.license)}
${renderLicenseBadge(data.license)}

## Contributing

${data.contributors}

## Tests

${data.test}˝

## Questions

If you have questions about this project, please contact me at ${data.email}, or [Github](https://github.com/${data.github}).`;


}

module.exports = generateMarkdown;
