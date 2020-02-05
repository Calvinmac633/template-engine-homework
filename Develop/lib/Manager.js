const Employee = require("./Employee.js");

class Manager extends Employee {
    constructor(name, id, email, officeNumber) {
        super(name, id, email);
        this.officeNumber = officeNumber
    }
    getRole = function () {
        return "Manager"
    }
    getOfficeNumber = function () {
        return this.officeNumber
    }
}

module.exports = Manager;