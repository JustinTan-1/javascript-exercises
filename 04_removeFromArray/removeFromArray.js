const removeFromArray = function (array, ...removeFromArray) {
  for (i = 0; i < removeFromArray.length; i++) {
    let parameterItem = removeFromArray[i];
    let indexOfParameterItem = array.indexOf(parameterItem);
    while (indexOfParameterItem !== -1) {
      array.splice(indexOfParameterItem, 1);
      indexOfParameterItem = array.indexOf(parameterItem);
    }
  }
  return array;
};

// Do not edit below this line
module.exports = removeFromArray;
