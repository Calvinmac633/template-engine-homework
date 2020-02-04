const Employee = require("./Employee.js");

class Intern extends Employee {
    constructor(name, id, title, email, school) {
        super(name, id, title, email);
        this.school = school
    }
    getRole = function () {
        return "Intern"
    }
    getSchool = function () {
        return this.school
    }
}

module.exports = Intern;