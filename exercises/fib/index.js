// --- Directions
// Print out the n-th entry in the fibonacci series.
// The fibonacci series is an ordering of numbers where
// each number is the sum of the preceeding two.
// For example, the sequence
//  [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
// forms the first ten entries of the fibonacci series.
// Example:
//   fib(4) === 3

// function fib(n) {
//   let sequence = [0, 1];
//   if (n <= 1) {
//     return n;
//   }
//   for (let i = 2; i <= n; i++){
//     sequence[i] = sequence[i - 2] + sequence[i - 1];
//   }
//   return sequence[n];
//   // iterate from 0 to n
//     // for each iteration add the previous two numbers
// }

// function fib(n, sequence = [0, 1], i = 2) {
//   if (n <= 1) {
//     return n;
//   }
  
//   sequence[i] = sequence[i - 2] + sequence[i - 1];
  
//   if (i === n){
//     return sequence[n];
//   }
  
//   return fib(n, sequence, i + 1)
//   // iterate from 0 to n
//     // for each iteration add the previous two numbers
// }

// function fib(n) {
//   if (n < 2) {
//     return n;
//   }
//   return fib(n - 1) + fib(n - 2);
// }

//efficient version: 

function memoize(fn) {
  const cache = {};
  return function(args){
    if (cache[args]) {
      return cache[args];
    }
    const result = fn.call(null, args);
    cache[args] = result;
    return result;
  }
}

function fib(n) {
  if (n < 2) {
    return n;
  }
  return fib(n - 1) + fib(n - 2);
}

fib = memoize(fib);

module.exports = fib;
