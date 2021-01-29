const Employee = require ("../lib/employee")

class Manager extends Employee {
    constructor(empName, id, email, officeNo) {
        super("Manager", empName, id, email);
        this.officeNo = officeNo;
    }
    getOfficeNumber() {
        return this.officeNo;
    }
}

module.exports = Manager