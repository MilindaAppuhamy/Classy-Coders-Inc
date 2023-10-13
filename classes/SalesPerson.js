const { Employees } = require("./Employees");

class SalesPerson extends Employees {
  #totalSales;
  constructor(name, title, salary, clients) {
    super(name, title, salary);
    this.clients = clients;
    this.#totalSales = 0;
  }

  getSalesNumber() {
    return this.#totalSales;
  }

  makeSale(amount) {
    this.#totalSales += amount;
  }
}

module.exports = {
  SalesPerson,
};
