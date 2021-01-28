const Employee = require ("../lib/employee");
const Engineer = require("../lib/engineer");


describe ("engineer class", () => {
    describe('initialization', () => {
        it('should create an object with name, id, email, and github if provided with valid arguments', () => {
            const terry = new Engineer("terry", 7, "terry@cmail.com", "terrytheman")

            expect(terry.empName).toEqual("terry");
            expect(terry.id).toEqual(7);
            expect(terry.email).toEqual("terry@cmail.com")
            expect(terry.github).toEqual("terrytheman")
        });
    });
    describe('getGitHub method', () => {
        it('returns the github account username of the stated engineer', () => {
            const terry = new Engineer("terry", 7, "terry@cmail.com", "terrytheman")
            expect(terry.getGitHub()).toEqual("terrytheman")
        });
    });
});