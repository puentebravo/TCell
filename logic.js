const inquirer = require ("inquirer")
const fs = require ("fs")
const Employee = require ("./lib/employee.js")
const Engineer = require ("./lib/engineer.js")
const Intern = require ("./lib/intern.js")
const Manager = require ("./lib/manager.js")
const template = require ("./src/page-template.js")

let team = []

const collectAnswers = async () => {

const prompts = [
        {
            type: "list",
            name: "Role",
            choices: ["Manager", "Engineer", "Intern"],
            message: "Which employee would you like to add?",
        },
        {
            type: "input",
            name: "Name",
            message: "What is this employee's name?",
        },
        {
            type: "number",
            name: "ID",
            message: "What is this employee's ID?"
        },
        {
            type: "input",
            name: "Email",
            message: "What is this employee's Email?"
        },
        {
            type: "input",
            name: "OfficeNo",
            message: "What is this Manager's Office Number?",
            when: (answers) => answers.Role === "Manager"
        },
        {
            type: "input",
            name: "Github",
            message: "What is this Engineer's Github username?",
            when: (answers) => answers.Role === "Engineer"
        },
        {
            type: "input",
            name: "School",
            message: "Which school does this intern attend?",
            when: (answers) => answers.Role === "Intern"
        },
        {
            type: "confirm",
            name: "addConfirm",
            message: "Would you like to add another employee?",
            default: true
        },
    ]
    const { addConfirm, ...answers } = await
    inquirer.prompt(prompts);
    switch (answers.Role) {
        case "Manager":
            const newManager = new Manager(answers.Name, answers.ID, answers.Email, answers.OfficeNo)
            team.push(newManager);
            console.log(team);
            break;
        case "Engineer":
            const newEngineer = new Engineer(answers.Name, answers.ID, answers.Email, answers.Github);
            team.push(newEngineer);
            console.log(team)
            break;
        case "Intern":
            const newIntern = new Intern(answers.Name, answers.ID, answers.Email, answers.School);
            team.push(newIntern);
            console.log(team);
            break;
        default:
            console.log("Array is still empty. Reconfigure.")
            break;
    }
    return addConfirm ? collectAnswers(team) : team
    };

const initialize = async () => {
    await collectAnswers();
    const content = template(team);
    fs.writeFile("output/profile.html", content, (err) => {
        err ? console.log(err) : console.log("Index created. Have a nice day.")
    });
    const cssTemplate = `body {
        background-color: rgb(48, 46, 46); 
    }
    .card-body{
        color: black;
    }`
    fs.writeFile("output/style.css", cssTemplate, (err) => {
        err ? console.log(err) : console.log("Stylesheet created.")
    });
}

initialize();