const caesar = function(code, offset) {
  // Adjust the offset for negative or excessively large values

  while (offset < 0) {
    offset += 26;
  }
  while (offset > 25) {
    offset -= 26;
  }

  // Create array of alphabet in unicode
  let reference = {};

  // Setup upper case
  let base = 65;  // starting decimal value
  for (i = 0; i < 26; i++) {
    // key -> val
    // steps 65 - 90 in decimal
    // set key_int - the secret letter to decode
    // set val_int - the decoded solution
    let key_int = base + i;
    let val_int = base + i + offset <= 90 ? base + i + offset : base + i + offset - 26;
    reference[String.fromCharCode(parseInt(key_int.toString(16), 16))] =
    String.fromCharCode(parseInt(val_int.toString(16), 16));
  }
  // Setup lower case
  base = 97;  // starting decimal value
  for (i = 0; i < 26; i++) {
    // key -> val
    // steps 65 - 90 in decimal
    // set key_int - the secret letter to decode
    // set val_int - the decoded solution
    let key_int = base + i;
    let val_int = base + i + offset <= 122 ? base + i + offset : base + i + offset - 26;
    reference[String.fromCharCode(parseInt(key_int.toString(16), 16))] =
    String.fromCharCode(parseInt(val_int.toString(16), 16));
  }

  let translated = '';
  for (i = 0; i < code.length; i++) {
    let this_letter = code[i];
    if (this_letter in reference) {
      translated += reference[this_letter];
    }
    else {
      translated += this_letter;
    }
  }

  return translated;

};

// Do not edit below this line
module.exports = caesar;
