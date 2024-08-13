const fibonacci = function (sequenceNumber) {
  if (sequenceNumber == 0) {
    return 0;
  }
  if (sequenceNumber < 0) {
    return "OOPS";
  }
  const fibonacciSequence = [1, 1];
  for (let i = 1; i <= sequenceNumber; i++) {
    let sum =
      fibonacciSequence[fibonacciSequence.length - 1] +
      fibonacciSequence[fibonacciSequence.length - 2];
    fibonacciSequence.push(sum);
    console.log(fibonacciSequence);
  }
  return fibonacciSequence[sequenceNumber - 1];
};

// Do not edit below this line
module.exports = fibonacci;
