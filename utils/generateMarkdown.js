function generateMarkdown(data) {
  return `
# ${data.title}

## Description
${data.description}

## Table of Contents
1. [Installation](#installation)
2. [Usage](#usage)
3. [License](#license)
4. [Contributing](#contributing)
5. [Tests](#tests)
6. [Questions](#questions)

## Installation
<p id='installation'></p>

  ${data.installation}

## Usage
<p id='usage'></p>

  ${data.useage}

## License
<p id='license'></p>

<img alt='licenseBadge' src='https://img.shields.io/badge/License-${data.license}-BLUE'>
  
- ${data.license}

## Contributing
<p id='contributing'></p>

  ${data.contributing}

## Tests
<p id='tests'></p>

  ${data.test}

## Questions
<p id='questions'></p>

If you have questions about this application, I can be contacted at 
  
**${data.email}**

<img src="${data.avatar_url}" alt="${data.name}" style='width: 200px; height: 200px;'>

`;
}

module.exports = generateMarkdown;
