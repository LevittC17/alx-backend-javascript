// Implement the Pricing class
class Pricing {
  constructor(amount, currency) {
    // Initialize the attributes with underscores
    this._amount = amount;
    this._currency = currency;
  }

  // Implement getters and setters for amount and currency
  get amount() {
    return this._amount;
  }

  set amount(value) {
    this._amount = value;
  }

  get currency() {
    return this._currency;
  }

  set currency(value) {
    this._currency = value;
  }

  // Implement the displayFullPrice method
  displayFullPrice() {
    return `${this._amount} ${this._currency.name} (${this._currency.code})`;
  }

  // Implement the static convertPrice method
  static convertPrice(amount, conversionRate) {
    return amount * conversionRate;
  }
}

export default Pricing;
