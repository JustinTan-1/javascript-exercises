const reverseString = function (string) {
  const splitString = string.split("");
  const reversedChars = splitString.reverse();
  let reversedString = "";
  for (i = 0; i < reversedChars.length; i++) {
    reversedString += reversedChars[i];
  }
  return reversedString;
};

// Do not edit below this line
module.exports = reverseString;
