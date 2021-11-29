const getAge = function(birth, death) {
    if (!death) {
        death = new Date().getFullYear();
    }
    return death - birth;
};

const findTheOldest = function(people) {

    // Copied from https://github.com/iVuDang/The-Odin-Project-JavaScript-Exercises/blob/main/findTheOldest/findTheOldest.js
    // for my own practice and review
    return people.reduce((oldest, current) => {
        const oldestAge = getAge(oldest.yearOfBirth, oldest.yearOfDeath);
        const currentAge = getAge(current.yearOfBirth, current.yearOfDeath);
        return oldestAge < currentAge ? current : oldest;
    });

};

// Do not edit below this line
module.exports = findTheOldest;
