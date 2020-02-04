const Employee = require("./Employee.js");

class Manager extends Employee {
    constructor(name, id, title, email, officeNumber) {
        super(name, id, title, email);
        this.officeNumber = officeNumber
    }
    getRole = function () {
        return "Manager"
    }
}

module.exports = Manager;