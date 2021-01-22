import employee from "../lib/employee";

describe ("employee class", () => {
    // These should all test for whether a new employee object is created returning the correct values, and for whether the methods do what they're supposed to. 
    describe('initialization', () => {
        it('should create an object with name, id, and email if provided with valid arguments', () => {
            const employee = new Employee("terry", 7, "terry@cmail.com")

            expect(employee.name).toEqual("terry");
            expect(employee.id).toEqual(7);
            expect(employee.email).toEqual("terry@cmail.com")
        });
        it('should throw an error if provided with no valid arguments', () => {
            const emp2 = () => new Employee();
            expect(emp2).tothrow()
        });
        it('should throw an error if "name" is not a string', () => {
            const emp2 = () => new Employee(2, 7, "terry@cmail.com");
            const err = new Error("Expected paramter 'name' to be a string.");

            expect(emp2).tothrow(err);
        });
        it('should throw an error if "id" is not a number', () => {
            const emp2 = () => new Employee("terry", "ham", "terry@cmail.com");
            const err = new Error("Expected parameter 'id' to be a number.");

            expect(emp2).tothrow(err);
        });
        it('should throw an error if "email" is not a string', () => {
            const emp2 = () => new Employee("terry", 7, 2);
            const err = new Error("Expected parameter 'email' to be a string.");

            expect(emp2).tothrow(err);
        });

    });
   
} )