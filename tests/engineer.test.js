const Employee = require ("../lib/employee");
const Engineer = require("../lib/engineer");


describe ("engineer class", () => {
    describe('initialization', () => {
        it('should create an object with name, id, email, and github if provided with valid arguments', () => {
            const terry = new Engineer("terry", 7, "terry@cmail.com", "terrytheman")

            expect(terry.name).toEqual("terry");
            expect(terry.id).toEqual(7);
            expect(terry.email).toEqual("terry@cmail.com")
            expect(terry.github).toEqual("terrytheman")
        });
        it('should throw an error if provided with no valid arguments', () => {
            const emp2 = () => new Engineer();
            expect(emp2).tothrow()
        });
        it('should throw an error if "name" is not a string', () => {
            const emp2 = () => new Engineer(2, 7, "terry@cmail.com", "terrytheman");
            const err = new Error("Expected paramter 'name' to be a string.");

            expect(emp2).tothrowError(err);
        });
        it('should throw an error if "id" is not a number', () => {
            const emp2 = () => new Engineer("terry", "ham", "terry@cmail.com", "terrytheman");
            const err = new Error("Expected parameter 'id' to be a number.");

            expect(emp2).tothrowError(err);
        });
        it('should throw an error if "email" is not a string', () => {
            const emp2 = () => new Engineer("terry", 7, 2, "terrytheman");
            const err = new Error("Expected parameter 'email' to be a string.");

            expect(emp2).tothrowError(err);
        });
        it('should throw an error if "github" is not a string', () => {
            const emp2 = () => new Engineer("terry", 7, "terry@cmail.com", 1234);
            const err = new Error("Expected parameter 'github' to be a string.");

            expect(emp2).tothrowError(err);
        });

    });
    describe('getGitHub method', () => {
        it('returns the github account username of the stated engineer', () => {
            const terry = new Engineer("terry", 7, "terry@cmail.com", "terrytheman")
            expect(terry.getGitHub()).toEqual("terrytheman")
        });
    });
});