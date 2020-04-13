let fs = require("fs");
let inquirer = require("inquirer");
let api = require("./utils/api");
let generateMarkdown = require("./utils/generateMarkdown");

function promptUser() {
  return inquirer
    .prompt([
      {
        type: "input",
        name: "username",
        message: "What is your GitHub username?"
      },
      {
        type: "input",
        name: "title",
        message:
          "What is the title of your repository? Please use correct capitalization and punctuation for all questions."
      },
      {
        type: "input",
        name: "description",
        message: "Please write a description for your repository."
      },
      {
        type: "input",
        name: "installation",
        message:
          "What are the steps required to install your project? Please provide a step-by-step guide."
      },
      {
        type: "input",
        name: "useage",
        message:
          "Please provide instructions and examples on how to use your application."
      },
      {
        type: "list",
        name: "license",
        message: "Choose a license for your project.",
        choices: [
          "MIT License",
          "GNU GPLv3",
          "GNU AGPLv3",
          "GNU LGPLv3",
          "Mozilla Public License 2.0",
          "Apache License 2.0",
          "Boost Softward License 1.0",
          "The Unlicense"
        ]
      },
      {
        type: "input",
        name: "contributing",
        message: "How can users contribute to your work?"
      },
      {
        type: "input",
        name: "test",
        message: "How can your application be tested? Please provide examples."
      }
    ])
    .then(async function(data) {
      const response = await api.getUser(data.username);

      const dataToFile = { ...data, ...response.data };
      console.log(dataToFile);

      let fileName = "README.md";
      writeToFile(fileName, dataToFile);
    });
}

function writeToFile(fileName, data) {
  let fileName = "README.md";

  fs.writeFile(fileName, generateMarkdown(data), function(err) {
    if (err) {
      return console.log(err);
    } else {
      console.log(`Successfully created file.`);
    }
  });
}

function initial() {
  promptUser();
}

initial();
