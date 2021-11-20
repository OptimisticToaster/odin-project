const findTheOldest = function(people) {

    // working this way first, then try reduce


    // current year
    let current = new Date().getFullYear();

    // oldest person found so far
    let oldest = new Object();
    let age = 0;

    // loop through
    for( i = 0; i < people.length; i++) {
        // get person age
        let thisage = 0;
        if(people[i]['yearOfDeath'] > 0) {
            thisage = people[i]['yearOfDeath'] - people[i]['yearOfBirth'];
        }
        else {
            thisage = current - people[i]['yearOfBirth'];
        }
        
        if ( thisage > age) {
            age = thisage;
            oldest = people[i];
        }

    }
    return oldest;

};

// Do not edit below this line
module.exports = findTheOldest;
