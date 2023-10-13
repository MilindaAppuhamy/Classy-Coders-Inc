class Employees {
  #salary;
  #isHired;
  static #allEmployees = [];

  constructor(name, title, salary) {
    this.name = name;
    this.title = title;
    this.#salary = salary;
    this.#isHired = true;
    Employees.#allEmployees.push(this);
  }

  getSalary() {
    return this.#salary;
  }
  setSalary(salary) {
    this.#salary = salary;
  }
  getStatus() {
    return this.#isHired;
  }
  setStatus(command) {
    if (command === "fire") {
      this.#isHired = false;
    } else {
      this.#isHired = true;
    }
  }
  static getEmployees() {
    return Employees.#allEmployees;
  }
  static getTotalPayroll() {
    let total = 0;
    for (let employee of Employees.#allEmployees) {
      total += employee.getSalary();
    }
    return total;
  }
}

module.exports = {
  Employees,
};
