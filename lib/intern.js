const Employee = require ("../lib/employee")

class Intern extends Employee {
    constructor(school) {
        super(empName, id, email);
        this.school = "school";
    }
    getSchool() {
        return this.school;
    }
    getRole() {
        return "intern"
    }
}

module.exports = Intern