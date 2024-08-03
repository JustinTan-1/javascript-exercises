const repeatString = function (string, count) {
  if (count < 0) {
    return "ERROR";
  } else {
    let bigString = "";
    for (i = 1; i <= count; i++) {
      bigString += string;
    }
    return bigString;
  }
};

// Do not edit below this line
module.exports = repeatString;
