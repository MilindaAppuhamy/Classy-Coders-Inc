const { Employees } = require("./Employees");

class SoftwareEngineer extends Employees {
  #programmingLanguages;
  constructor(name, title, salary, programmingLanguages) {
    super(name, title, salary);
    this.#programmingLanguages = programmingLanguages;
  }

  getProgrammingLanguages() {
    return this.#programmingLanguages;
  }
  setProgrammingLanguages(language) {
    this.#programmingLanguages.push(language);
  }
}

module.exports = {
  SoftwareEngineer,
};
