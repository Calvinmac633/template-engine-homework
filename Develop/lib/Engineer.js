const Employee = require("./Employee.js");

class Engineer extends Employee {
    constructor(name, id, title, email, github) {
        super(name, id, title, email);
        this.github = github
    }
    getRole = function () {
        return "Engineer"
    }
    getGitHub = function () {
        return this.github
    }
}

module.exports = Engineer;