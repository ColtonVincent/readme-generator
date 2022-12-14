// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  ## Description

  ${data.description}
  
  ## Table of Contents
  
  - [Installation](#installation)
  - [Usage](#usage)
  - [Credits](#credits)
  - [License](#license)
  - [Badges](#badges)
  - [Features](#features)
  - [How to Contribute](#how_to_Contribute)
  - [Tests](#tests)

  ## Installation
  
  ${data.installation}
  
  ## Usage
  
  ${data.usage}
  
  ## Credits
  
  ${data.credits}
  
  ## License
  
  ${data.license}
  
  ## Badges
  
  ![](https://img.shields.io/badge/license-${data.license}-blue)
  
  ## Features
  
  ${data.features}
  
  ## How to Contribute
  
  ${data.howToContribute}
  
  ## Tests

  ${data.tests}
  
`;
}

module.exports = generateMarkdown;
