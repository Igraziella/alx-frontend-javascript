export default class Airport {
  constructor(name, code) {
    this._name = name;
    this._code = code;
  }

  // Getters and setters
  get name() {
    return this._name;
  }

  set name(value) {
    this._name = value;
  }

  get code() {
    return this._code;
  }

  set code(value) {
    this._code = value;
  }

  toString() {
    return `[object ${this.code}]`;
  }
}
