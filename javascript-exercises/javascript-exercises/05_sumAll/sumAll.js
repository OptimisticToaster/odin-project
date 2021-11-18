const sumAll = function(a, b) {
    // Check parameters
    // Inputs are integers
    // Inputs are not string representations of numbers
    if(!Number.isInteger(a) || !Number.isInteger(b)) {
        console.log('Error: Inputs are not valid integers.')
        return 'ERROR';
    }

    // Inputs are positive values
    if(a < 0 || b < 0) {
        console.log('Error: Inputs are less than 0.')
        return 'ERROR';
    }

    // Good to go - start processing

    // Set low to the lesser of a or b, and high to the other
    let low = Math.min(a, b);
    let high = Math.max(a, b);
    let total = 0;
    for(i = low; i < high + 1; i++) {
        total += i;
    }
    return total;
};

// Do not edit below this line
module.exports = sumAll;
