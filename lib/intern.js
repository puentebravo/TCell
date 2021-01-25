const Employee = require ("../lib/employee")

class Intern extends Employee {
    constructor(empName, id, email, school) {
        super(empName, id, email);
        this.school = school;
    }
    getSchool() {
        return this.school;
    }
    getRole() {
        return "Intern"
    }
}

module.exports = Intern