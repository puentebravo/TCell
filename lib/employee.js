class Employee{
    constructor(role, empName, id, email) {
        this.role = role
        this.empName = empName;
        this.id = id;
        this.email= email;
    }
    getName(){
        return this.empName;
    }
    getId(){
        return this.id;
    }
    getEmail(){
        return this.email;
    }
    getRole(){
        return this.role;
    }
}

module.exports = Employee