const getTheTitles = function (array) {
  const titles = [];
  array.map((object) => {
    titles.push(object.title);
  });
  return titles;
};

// Do not edit below this line
module.exports = getTheTitles;
