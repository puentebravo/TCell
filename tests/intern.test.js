const Employee = require ("../lib/employee");
const Intern = require ("../lib/intern")

describe ("Intern class", () => {
    describe('initialization', () => {
        it('should create an object with name, id, email, and school if provided with valid arguments', () => {
            const terry = new Intern("terry", 7, "terry@cmail.com", "Stronk University")

            expect(terry.empName).toEqual("terry");
            expect(terry.id).toEqual(7);
            expect(terry.email).toEqual("terry@cmail.com");
            expect(terry.school).toEqual("Stronk University");
        });
    });
    describe('getSchool method', () => {
        it('Should return the listed school of the intern', () => {
            const terry = new Intern("terry", 7, "terry@cmail.com", "Stronk University")
            expect(terry.getSchool()).toEqual("Stronk University");
        });
    })
    describe('getRole method', () => {
        it('Should return Intern as the role', () => {
            const terry = new Intern("terry", 7, "terry@cmail.com", "Stronk University")
            expect(terry.getRole()).toEqual("Intern")
        });
    })

});


    