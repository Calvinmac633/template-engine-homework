const inquirer = require("inquirer");
const fs = require("fs");

// const Employee = require("./lib/Employee");
const Manager = require("./lib/Manager");
const Intern = require("./lib/Intern");
const Engineer = require("./lib/Engineer");

async function init() {

  console.log("Please build your team:");

  let teamMembers = 0;

  await inquirer.prompt([
    {
      type: "input",
      message: "What is your manager's name?",
      name: "nameManager"
    },
    {
      type: "input",
      message: "What is your manager's ID?",
      name: "idManager"
    },
    {
      type: "input",
      message: "What is your manager's email address?",
      name: "emailManager"
    },
    {
      type: "input",
      message: "What is your manager's office number?",
      name: "officeNumber"
    },
  ])
    .then(managerAnswers => {
      teamMembers++;
      const manager = new Manager(managerAnswers.nameManager, managerAnswers.idManager, managerAnswers.emailManager, managerAnswers.officeNumber);
      console.log(manager)

    });
  console.log(teamMembers)
  if (teamMembers < 2) {
    await inquirer.prompt([
      {
        type: "list",
        message: "What kind of employee would you like to add?",
        name: "role",
        choices: ["Engineer", "Intern", "Manager"]
      },
    ])// end of prompt
      .then(answers => {

        role = answers.role;

        switch (role) {
          case "Engineer":
            async function getEngineer() {
              await inquirer.prompt([
                {
                  type: "input",
                  message: "What is your Engineer's name?",
                  name: "nameEngineer"
                },
                {
                  type: "input",
                  message: "What is your Engineer's ID?",
                  name: "idEngineer"
                },
                {
                  type: "input",
                  message: "What is your Engineer's email address?",
                  name: "emailEngineer"
                },
                {
                  type: "input",
                  message: "What is your Engineer's github?",
                  name: "github"
                },
              ])
                .then(answers => {
                  const engineer = new Engineer(
                    answers.nameEngineer,
                    answers.idEngineer,
                    answers.emailEngineer,
                    answers.github)
                  console.log(engineer)
                  // let teamMember
                })
            }//end of getEngineer
            getEngineer()
            break;
          case "Intern":
            break
          case "Manager":
            break
        }

      }); //End of if and .then statement

  }


}
init();