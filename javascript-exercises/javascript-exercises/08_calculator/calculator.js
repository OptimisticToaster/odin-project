const add = function(a, b) {
	return a + b;
};

const subtract = function(a, b) {
	return a - b;
};

const sum = function(nums) {
	let result = 0;
  for (i = 0; i < nums.length; i++) {
    result += nums[i];
  }
  return result;
};

const multiply = function(nums) {
	let result = 1;
  for (i = 0; i < nums.length; i++) {
    result *= nums[i];
  }
  return result;
};

const power = function(num, power) {
	return num ** power;
};

const factorial = function(num) {
	let result = 1;
  for (i = 0; i < num; i++) {
    result = result * (i+1);
  }
  return result;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
