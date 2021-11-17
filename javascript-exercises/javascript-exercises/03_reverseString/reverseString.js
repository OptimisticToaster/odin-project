const reverseString = function(str) {
    // Split string into an array
    let mylist = new Array();
    let mylength = str.length
    for (ctr = 0; ctr < mylength; ctr++) {
        mylist[ctr] = str[ctr];
    }

    // Step through array in reverse, merging into new string
    let newstring = '';
    for (ctr = mylength; ctr > 0; ctr--) {
        newstring += mylist[ctr-1];
    }
    return newstring;
};

// Do not edit below this line
module.exports = reverseString;
