const Employee = require ("../lib/employee")
const Manager = require ("../lib/manager")

describe ("Manager class", () => {
    describe('initialization', () => {
        it('should create an object with name, id, email, and school if provided with valid arguments', () => {
            const terry = new Manager("terry", 7, "terry@cmail.com", 212)

            expect(terry.empName).toEqual("terry");
            expect(terry.id).toEqual(7);
            expect(terry.email).toEqual("terry@cmail.com");
            expect(terry.officeNo).toEqual(212);
        });
    });
    describe('getOfficeNumber method', () => {
        it('should return the office number of the manager', () => {
            const sylvain = new Manager("sylvain", 7, "hanshotfirst@cmail.com", 2488);
            expect(sylvain.getOfficeNumber()).toEqual(2488)
        });
    });
    describe('getRole method', () => {
        it('Should return Manager as the role', () => {
            const terry = new Manager("terry", 7, "terry@cmail.com", 212)
            expect(terry.getRole()).toEqual("Manager")
        });
    })

});