const fs = require("fs")
const inquirer = require("inquirer")

const Manager = require("./lib/Manager")
const Engineer = require("./lib/Engineer")
const Intern = require("./lib/Intern")

async function init() {
    let outputHTML = "";
    let maxTeamSize = 6;
    console.log("Let start building your team...")
    let teamMembers = 0;
    let teamMembersArray = [];

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
        }
    ])
        .then(answers => {
            teamMembers++;
            const manager = new Manager(answers.nameManager, answers.idManager, answers.emailManager, answers.officeNumber);
            teamMembersArray.push(manager)
            teamMember = fs.readFileSync("templates/manager.html");
            outputHTML = outputHTML + "\n" + eval('`' + teamMember + '`');

        });

    for (i = 1; i < maxTeamSize; i++) {

        let role

        await inquirer.prompt([
            {
                type: "list",
                message: "What kind of employee would you like to add?",
                name: "role",
                choices: ["Engineer", "Intern", "Manager", "All Done"]
            },
        ])
            .then(answers => {
                role = answers.role
            });

        switch (role) {
            case "Engineer":

                await inquirer.prompt([
                    {
                        type: "input",
                        message: `What is your Engineer's name?`,
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
                        message: `What is your Engineer's github?`,
                        name: "github"
                    },
                ])
                    .then(answers => {
                        const engineer = new Engineer(
                            answers.nameEngineer,
                            answers.idEngineer,
                            answers.emailEngineer,
                            answers.github)
                        // teamMembers++;
                        teamMembersArray.push(engineer)
                        teamMember = fs.readFileSync("templates/engineer.html");
                        outputHTML = outputHTML + eval('`' + teamMember + '`');
                        // console.log(teamMembersArray)
                        // console.log(teamMembers)
                        //   module.exports = engineer
                    });
                break;
            case "Intern":
                await inquirer.prompt([
                    {
                        type: "input",
                        message: `What is your Intern's name?`,
                        name: "nameIntern"
                    },
                    {
                        type: "input",
                        message: "What is your Intern's ID?",
                        name: "idIntern"
                    },
                    {
                        type: "input",
                        message: "What is your Intern's email address?",
                        name: "emailIntern"
                    },
                    {
                        type: "input",
                        message: `What is your Intern's school?`,
                        name: "school"
                    },
                ])
                    .then(answers => {
                        const intern = new Intern(
                            answers.nameIntern,
                            answers.idIntern,
                            answers.emailIntern,
                            answers.school)
                        // teamMembers++;
                        teamMembersArray.push(intern)
                        teamMember = fs.readFileSync("templates/intern.html");
                        outputHTML = outputHTML + eval('`' + teamMember + '`');
                        //   console.log(teamMembersArray)
                        //   console.log(teamMembers)
                        //   module.exports = intern
                    })

                break;
            case "Manager":
                await inquirer.prompt([
                    {
                        type: "input",
                        message: `What is your Manager's name?`,
                        name: "nameManager"
                    },
                    {
                        type: "input",
                        message: "What is your Manager's ID?",
                        name: "idManager"
                    },
                    {
                        type: "input",
                        message: "What is your Manager's email address?",
                        name: "emailManager"
                    },
                    {
                        type: "input",
                        message: `What is your Office Number?`,
                        name: "officeNumber"
                    },
                ])
                    .then(answers => {
                        const manager = new Manager(
                            answers.nameManager,
                            answers.idManager,
                            answers.emailManager,
                            answers.officeNumber)
                        // teamMembers++;
                        teamMembersArray.push(manager)
                        teamMember = fs.readFileSync("templates/manager.html");
                        outputHTML = outputHTML + eval('`' + teamMember + '`');

                        //   console.log(teamMembersArray)
                        //   console.log(teamMembers)
                        //   module.exports = manager
                    })
                break
            case "All Done":
                i = 6
                break
        }
        console.log(teamMembersArray);
        module.exports = teamMembersArray;
    }
    const mainHTML = fs.readFileSync("templates/main.html");
    // outputHTML = eval(`${mainHTML}`);
    outputHTML = eval('`' + mainHTML + '`');
    fs.writeFile("output/team.html", outputHTML, function (e) {
        if (e) {
            return console.log(e);
        }
        console.log("team.html in the output directory has been updated");

    });

    // console.log(outputHTML);
}
init();