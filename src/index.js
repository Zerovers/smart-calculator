
class SmartCalculator {
  constructor(initialValue) {
    this.value = initialValue;
    this.one = 0;
  }

  add(number) {
    this.value = this.value + '+' + number;
    this.one = eval(this.value);
    return this;
  }

  subtract(number) {
    this.value = this.value + '-' + number;
    this.one = eval(this.value);
    return this;
  }

  multiply(number) {
    this.value = this.value + '*' + number;
    this.one = eval(this.value);
    return this;
  }

  devide(number) {
    this.value = this.value + '/' + number;
    this.one = eval(this.value);
    return this;
  }

  pow(number) {
    this.value = this.value + '**' + number;
    this.one = eval(this.value);
    return this;
  }

  valueOf() {
    return this.one;
  }
}

module.exports = SmartCalculator;

