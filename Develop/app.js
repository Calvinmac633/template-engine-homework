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
        type: "input",
        message: "How many engineers would you like on your team?",
        name: "numEngineers"
      },
      {
        type: "input",
        message: "How many interns would you like on your team?",
        name: "numInterns"
      }
    ])
      .then(answers => {
        let numberOfEngineers = answers.numEngineers
        let numberOfInterns = answers.numInterns
        // return numberOfEngineers && numberOfInterns
        console.log(numberOfEngineers)
        console.log(numberOfInterns)

        async function getEngineers() {
          for (i = 0; i < numberOfEngineers; i++) {
            await inquirer.prompt([
              {
                type: "input",
                message: `What is engineer number ${[i] + 1} name?`,
                name: "name"
              },
              {
                type: "input",
                message: `What is engineer number ${[i] + 1} id?`,
                name: "id"
              },
              {
                type: "input",
                message: `What is engineer number ${[i] + 1} email?`,
                name: "email"
              },
              {
                type: "input",
                message: `What is engineer number ${[i] + 1} github?`,
                name: "github"
              },
            ])
              .then(answers => {
                const engineer = new Engineer(answers.name, answers.id, answers.email, answers.github);
                console.log(engineer)
              })
          }
        } // end of getEngineers
        getEngineers();

        async function getInterns() {
          for (i = 0; i < numberOfInterns; i++) {
            await inquirer.prompt([
              {
                type: "input",
                message: `What is intern number ${[i]+1} name?`,
                name: "name"
              },
              {
                type: "input",
                message: `What is intern number ${[i]+1} id?`,
                name: "id"
              },
              {
                type: "input",
                message: `What is intern number ${[i]+1} email?`,
                name: "email"
              },
              {
                type: "input",
                message: `What is intern number ${[i]+1} school?`,
                name: "school"
              },
            ])
              .then(answers => {
                const intern = new Intern(answers.name, answers.id, answers.email, answers.school);
                console.log(intern)
              })
          }
        } // end of getInterns
        getInterns();
      }); //End of if statement

  }


}
init();