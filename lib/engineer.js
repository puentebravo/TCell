const Employee = require ("../lib/employee")

class Engineer extends Employee {
    constructor(empName, id, email, github) {
        super("Engineer", empName, id, email);
        this.github = github;
    };
    getGithub(){
        return this.github;
    };
}; 

module.exports = Engineer