const { sum, subtract } = require("../math");

let result, expected;

console.log("Adjust math.js to pass the test.");
result = sum(3, 7);
expected = 10;
expect(result).toBe(expected);
if (result !== expected) {
  throw new Error(`${result} is not equal to ${expected}`);
}

result = subtract(7, 3);
expected = 4;
if (result !== expected) {
  throw new Error(`${result} is not equal to ${expected}`);
}

function expect(actual) {
  return {
    toBe(expected) {
      if (actual !== expected) {
        throw new Error(`${actual} is not equal to ${expected}`);
      }
    },
  };
}
