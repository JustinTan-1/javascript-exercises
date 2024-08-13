const palindromes = function (string) {
  let palindrome = true;
  const charArray = string.split("");
  const filteredChars = charArray.filter((char) => {
    if (char == " " || char == "," || char == "." || char == "!") {
      return false;
    } else {
      return true;
    }
  });
  let reversedFilteredChars = charArray.reverse();
  reversedFilteredChars = reversedFilteredChars.filter((char) => {
    if (char == " " || char == "," || char == "." || char == "!") {
      return false;
    } else {
      return true;
    }
  });
  console.log(filteredChars);
  console.log(reversedFilteredChars);
  for (let i = 0; i < filteredChars.length; i++) {
    if (
      filteredChars[i].toLowerCase() !== reversedFilteredChars[i].toLowerCase()
    ) {
      palindrome = false;
    }
  }
  return palindrome;
};

// Do not edit below this line
module.exports = palindromes;
