class Currency {
  constructor(code, name) {
    // Initialize the attributes with underscores
    this._code = code;
    this._name = name;
  }

  // Implement getters and setters for code and name
  get code() {
    return this._code;
  }

  set code(value) {
    this._code = value;
  }

  get name() {
    return this._name;
  }

  set name(value) {
    this._name = value;
  }

  // Implement the displayFullCurrency method
  displayFullCurrency() {
    return `${this._name} (${this._code})`;
  }
}

export default Currency;
