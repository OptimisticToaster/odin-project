const getTheTitles = function(books) {
  let title_list = new Array();
  for (i = 0; i < books.length; i++) {
      title_list[i] = books[i]['title'];
  }
  return title_list;
};

// Do not edit below this line
module.exports = getTheTitles;
