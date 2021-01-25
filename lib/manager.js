const Employee = require ("../lib/employee")

class Manager extends Employee {
    constructor(empName, id, email, officeNo) {
        super(empName, id, email);
        this.officeNo = officeNo;
    }
    getRole() {
        return "Manager"
    }
}

module.exports = Manager