const findTheOldest = function (array) {
  const date = new Date();
  array.map((object) => {
    if (object.yearOfDeath == undefined) {
      object.yearOfDeath = date.getFullYear();
    }
  });
  array.sort((a, b) => {
    if (a.yearOfDeath - a.yearOfBirth > b.yearOfDeath - b.yearOfBirth) {
      return -1;
    } else {
      return 1;
    }
  });
  return array[0];
};

// Do not edit below this line
module.exports = findTheOldest;
