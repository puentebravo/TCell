const Employee = require ("../lib/employee")

class Engineer extends Employee {
    constructor(empName, id, email, github) {
        super(empName, id, email);
        this.github = github;
    };
    getGitHub(){
        return this.github;
    };
    getRole(){
        return "Engineer";
    };
}; 

module.exports = Engineer