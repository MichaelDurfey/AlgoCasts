// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a pyramid shape
// with N levels using the # character.  Make sure the
// pyramid has spaces on both the left *and* right hand sides
// --- Examples
//   pyramid(1)
//       '#'
//   pyramid(2)
//       ' # '
//       '###'
//   pyramid(3)
//       '  #  '
//       ' ### '
//       '#####'

// From 0 to n (iterate through rows)
  // create an empty string, 'level'
  // from 0 to ??? (columns)
    // If the column should have a #
      //  Add a # to level
    // else
      // add a space to 'level
    // console log 'stair'

// function pyramid(n) {
//   const midpoint = Math.floor((2 * n - 1) / 2);
//   for (let row = 0; row < n; row++) {
//     let hash = '';
//     for (let col = 0; col < n * 2 - 1; col++) {
//       if (midpoint + row >= col && midpoint - row <= col) {
//         hash += '#'; 
//       } else {
//         hash += ' ';
//       }
//     }
//     console.log(hash)
//   }
// }

function pyramid(n, row = 0, hash = '') {
  const midpoint = Math.floor((2 * n - 1) / 2);
  if (row === n) {
    return;
  }
  if (hash.length === (2 * n - 1)) {
    console.log(hash);
    return pyramid(n, row + 1)
  }

  if (midpoint + row >= hash.length && midpoint - row <= hash.length) {
    hash += '#';
  } else {
    hash += ' ';
  }
  pyramid(n, row, hash);
};

module.exports = pyramid;
