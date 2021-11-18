const leapYears = function(year) {
    // Test if Leap Year

    // Divisible by 4

    // Except Divisible by 100

    // Unless Divisible by 400

    if(year % 400 == 0) {
        return true;
    }

    else if((year % 4 == 0) && (year % 100 != 0)) {
        return true;
    }

    else {
        return false;
    }
};

// Do not edit below this line
module.exports = leapYears;
