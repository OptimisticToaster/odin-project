const fibonacci = function(sel) {
  // check that selection is an integer
  if (!Number.isInteger(parseInt(sel)) || sel < 0) {
      return "OOPS";
  }

  // step through until selected level
  let a = 0;
  let b = 1;
  let fib = a + b;
  for (i = 2; i < sel; i++ ) {
    a = b;
    b = fib;
    fib = a+b;
  }
  return fib;
};

// Do not edit below this line
module.exports = fibonacci;
