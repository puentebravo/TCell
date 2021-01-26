const inquirer = require ("inquirer")
const fs = require ("fs")
const Employee = require ("./lib/employee")
const Engineer = require ("./lib/engineer")
const Intern = require ("./lib/intern")
const Manager = require ("./lib/manager")

inquirer
.prompt([
        {
            type: "input",
            name: "teamName",
            message: "What is your team's name?"
        },
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
        }
    ])
    .then((answers) => {
        console.log(answers)
        
    })