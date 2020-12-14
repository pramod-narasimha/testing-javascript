const { sum, subtract } = require("../math");

let result, expected;

console.log("Adjust math.js to pass the test.");

test("Addition being tested", async () => {
  result = sum(3, 7);
  expected = 10;
  expect(result).toBe(expected);
});
test("Subtract being tested", async () => {
  result = subtract(7, 3);
  expected = 4;
  expect(result).toBe(expected);
});
expect(result).toBe(expected);

async function test(title, callback) {
  try {
    await callback();
    console.log(`Passed - ${title}`);
  } catch (error) {
    console.log(`Failed ${title}`);
    console.log(error);
  }
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
