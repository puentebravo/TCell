const Employee = require ("../lib/employee")

describe ("employee class", () => {
    // These should all test for whether a new employee object is created returning the correct values, and for whether the methods do what they're supposed to. 
    describe('initialization', () => {
        it('should create an object with name, id, and email if provided with valid arguments', () => {
            const terry = new Employee("terry", 7, "terry@cmail.com")

            expect(terry.empName).toEqual("terry");
            expect(terry.id).toEqual(7);
            expect(terry.email).toEqual("terry@cmail.com")
        });
    });
   describe("getName method", () => {
    it('returns the name of the employee', () => {
        const terry = new Employee("terry", 7, "terry@cmail.com");
        expect(terry.getName()).toEqual("terry")
        });
    });
   describe("getId method", () => {
    it('returns the ID of the employee', () => {
        const terry = new Employee("terry", 7, "terry@cmail.com");
        expect(terry.getId()).toEqual(7) 
        });
    });
   describe("getEmail method", () => {
    it('returns the Email of the employee', () => {
        const terry = new Employee("terry", 7, "terry@cmail.com");
        expect(terry.getEmail()).toEqual("terry@cmail.com");
        });
    });
    describe("getRole method", () => {
        it('returns the role of the employee', () => {
        const terry = new Employee("terry", 7, "terry@cmail.com");
        expect(terry.getRole()).toEqual("Employee");
        });
    });
});