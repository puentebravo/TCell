const Employee = require ("../lib/employee")

class Intern extends Employee {
    constructor(empName, id, email, school) {
        super("Intern", empName, id, email);
        this.school = school;
    }
    getSchool() {
        return this.school;
    }
}

module.exports = Intern