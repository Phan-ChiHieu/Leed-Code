/*

Example 1:

    Input: 
    actions = ["Calculator", "add", "subtract", "getResult"], 
    values = [10, 5, 7]
    Output: 8
    Explanation: 
    new Calculator(10).add(5).subtract(7).getResult() // 10 + 5 - 7 = 8

Example 2:

    Input: 
    actions = ["Calculator", "multiply", "power", "getResult"], 
    values = [2, 5, 2]
    Output: 100
    Explanation: 
    new Calculator(2).multiply(5).power(2).getResult() // (2 * 5) ^ 2 = 100

Example 3:

    Input: 
    actions = ["Calculator", "divide", "getResult"], 
    values = [20, 0]
    Output: "Division by zero is not allowed"
    Explanation: 
    new Calculator(20).divide(0).getResult() // 20 / 0 

    The error should be thrown because we cannot divide by zero.

*/

class Calculator {
  constructor(value) {
    this.result = value;
  }
  add(value) {
    this.result += value;
    return this;
  }

  subtract(value) {
    this.result -= value;
    return this;
  }

  multiply(value) {
    this.result *= value;
    return this;
  }

  divide(value) {
    if (value === 0) {
      throw new Error("Division by zero is not allowed");
    }
    this.result /= value;
    return this;
  }

  power(value) {
    this.result **= value;
    return this;
  }

  getResult() {
    return this.result;
  }
}

const rs = new Calculator(10).add(5).subtract(7).getResult(); // 10 + 5 - 7 = 8

console.log("rs", rs);
