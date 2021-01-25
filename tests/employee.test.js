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
        // it('should throw an error if provided with no valid arguments', () => {
        //     const emp2 = () => new Employee();
        //     expect(emp2).tothrow()
        // });
        // it('should throw an error if "name" is not a string', () => {
        //     const emp2 = () => new Employee(2, 7, "terry@cmail.com");
        //     const err = new Error("Expected paramter 'name' to be a string.");

        //     expect(emp2).tothrowError(err);
        // });
        // it('should throw an error if "id" is not a number', () => {
        //     const emp2 = () => new Employee("terry", "ham", "terry@cmail.com");
        //     const err = new Error("Expected parameter 'id' to be a number.");

        //     expect(emp2).tothrowError(err);
        // });
        // it('should throw an error if "email" is not a string', () => {
        //     const emp2 = () => new Employee("terry", 7, 2);
        //     const err = new Error("Expected parameter 'email' to be a string.");

        //     expect(emp2).tothrowError(err);
        // });

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