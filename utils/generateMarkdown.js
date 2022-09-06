// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license !== "none") {
    return `<img src="https://img.shields.io/badge/license-${license}-blue.svg" alt="GitHub License Badge">`
  }
  return ''
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license !== "none") {
    return (`* [Licenses](#licenses)`)
  }
  return ''
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license !== "none") {
    return (`## Licenses: 
  This project is licensed under the ${license} license.`)
  }
  return ''
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
  <h1>${data.project_name}</h1>
  ${renderLicenseBadge(data.licenses)}

  ## Table of Contents:
  * [Username](#username)
  * [Email Address](#email)
  * [Project Name](#project_name)
  * [Project Description](#description)
  ${renderLicenseLink(data.licenses)}
  * [Dependencies Installation](#intall_dependencies)
  * [Run Tests](#run_tests)
  * [Usage](#using_repo)
  * [Contribution](#contribution)
  * [Questions](#questions)

  
  
  ## Project Name:
  ${data.project_name}

  ## Project Description:
  ${data.description}
  
  ${renderLicenseSection(data.licenses)}

  ## Dependencies Installation:
  ${data.intall_dependencies}

  ## Run Tests:
  ${data.run_tests}

  ## Usage:
  ${data.using_repo}

  ## Contribution:
  ${data.contribution}
  
  ## Questions:
  If you have any questions you can email at: ${data.email}\n
  You can see more of my work at [${data.github}](https://github.com/${data.github})


`;

}


module.exports = generateMarkdown;
