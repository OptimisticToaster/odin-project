const removeFromArray = function(mylist, deaditem) {

    // Find index value for deaditem in mylist
    let deaditemID = mylist.indexOf(deaditem);

    // Delete deaditem using its index value
    mylist.splice(deaditemID, 1);

    return mylist;
};

// Do not edit below this line
module.exports = removeFromArray;
