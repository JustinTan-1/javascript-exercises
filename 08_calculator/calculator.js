const add = function (num1, num2) {
  return num1 + num2;
};

const subtract = function (num1, num2) {
  return num1 - num2;
};

const sum = function (nums) {
  return nums.reduce((total, value) => {
    return (total += value);
  }, 0);
};

const multiply = function (nums) {
  return nums.reduce((total, value) => {
    return total * value;
  });
};

const power = function (num, power) {
  return num ** power;
};

const factorial = function (num) {
  let total = 1;
  for (i = 1; i <= num; i++) {
    total *= i;
  }
  return total;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial,
};
