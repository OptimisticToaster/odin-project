const ftoc = function(temp_f) {
  return Math.round(((temp_f - 32) * 5 / 9)*10.0)/10;
};

const ctof = function(temp_c) {
  return Math.round(((temp_c * 9 / 5) + 32)*10.0)/10;
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
