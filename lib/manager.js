const Employee = require ("../lib/employee")

class Manager extends Employee {
    constructor(officeNo) {
        super(empName, id, email);
        this.officeNo = "officeNo";
    }
    getRole() {
        return "Manager"
    }
}

module.exports = Manager