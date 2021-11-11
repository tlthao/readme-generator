// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function makeLicense (selection){
  for (let i = 0; i < licenseObjs.length; i++){
  if (selection === licenseObjs[i].name) return licenseObjs[i];
}
return "No License";
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

`;
}

module.exports = generateMarkdown;
