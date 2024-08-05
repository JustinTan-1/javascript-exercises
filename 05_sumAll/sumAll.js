const sumAll = function (num1, num2) {
  if (
    num1 < 0 ||
    num2 < 0 ||
    typeof num1 !== "number" ||
    typeof num2 !== "number" ||
    !Number.isInteger(num1) ||
    !Number.isInteger(num2)
  ) {
    return "ERROR";
  }
  let sum;
  if (num1 > num2) {
    sum = num2;
    for (i = num2 + 1; i <= num1; i++) {
      sum += i;
    }
  }
  if (num1 < num2) {
    sum = num1;
    for (i = num1 + 1; i <= num2; i++) {
      sum += i;
    }
  }
  return sum;
};

// Do not edit below this line
module.exports = sumAll;
