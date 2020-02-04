class Employee {
    constructor(name, id, title, email, getName, getId, getEmail, getRole) {
      this.name = name;
      this.id = id;
      this.title = title;
      this.email = email;
    }
    getName = function () {
      return this.name
    }
    getID = function () {
      return this.id
    }
    getEmail = function () {
      return this.email
    }
    getRole = function () {
      return "Employee"
    }
  }
  
console.log(typeof(Employee))

  module.exports = {
    Employee,
  };
