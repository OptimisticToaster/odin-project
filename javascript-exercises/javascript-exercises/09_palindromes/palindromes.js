const palindromes = function (word) {
  // set to lowercase
  word = word.toLowerCase();

  // remove everything not a letter
  let reg = /[^a-z]/g;
  word = word.replace(reg, '');

  // compare letters, working from ends
  let half_length = Math.floor(word.length/2);
  for ( i = 0; i < half_length; i++) {
    if ( word[i] != word.substr(word.length - i -1, 1)) {
        return false;
    }
  }
  return true;
};

// Do not edit below this line
module.exports = palindromes;
