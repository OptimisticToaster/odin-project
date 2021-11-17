const removeFromArray = function (mylist) {
    let myargs = Array.from(arguments);
    // Step through the arguments list.
    // For each arg, remove one copy from mylist if found
    for (ctr = 1; ctr < myargs.length; ctr++) {
      if (mylist.includes(myargs[ctr])) {
        mylist.splice(mylist.indexOf(myargs[ctr]), 1);
      }
    }

    return mylist;
};

// Do not edit below this line
module.exports = removeFromArray;
