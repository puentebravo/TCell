const inquirer = require ("inquirer")
const fs = require ("fs")
const Employee = require ("./lib/employee.js")
const Engineer = require ("./lib/engineer.js")
const Intern = require ("./lib/intern.js")
const Manager = require ("./lib/manager.js")
const template = require ("./src/page-template.js")
const cssTemplate = require ("./src/css-template.js")

const collectAnswers = async (inputs = []) => {

const prompts = [
        {
            type: "list",
            name: "addRole",
            choices: ["Manager", "Engineer", "Intern"],
            message: "Which employee would you like to add?",
        },
        {
            type: "input",
            name: "addName",
            message: "What is this employee's name?",
        },
        {
            type: "number",
            name: "addID",
            message: "What is this employee's ID?"
        },
        {
            type: "input",
            name: "addEmail",
            message: "What is this employee's Email?"
        },
        {
            type: "input",
            name: "addOfficeNo",
            message: "What is this Manager's Office Number?",
            when: (answers) => answers.addRole === "Manager"
        },
        {
            type: "input",
            name: "addGithub",
            message: "What is this Engineer's Github username?",
            when: (answers) => answers.addRole === "Engineer"
        },
        {
            type: "input",
            name: "addSchool",
            message: "Which school does this intern attend?",
            when: (answers) => answers.addRole === "Intern"
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
    const newAnswers = [...inputs, answers];
    return addConfirm ? collectAnswers(newAnswers) : newAnswers
    };

const initialize = async () => {
    const inputs = await collectAnswers();
    console.log(inputs);
   const content = template(inputs);
    fs.writeFile("output/profile.html", content, (err) => {
        err ? console.log(err) : console.log("Index created. Have a nice day.")
    });
    fs.writeFile("output/style.css", cssTemplate, (err) => {
        err ? console.log(err) : console.log("Stylesheet created. Enjoy!")
    });
    
}

initialize();