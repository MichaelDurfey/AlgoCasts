// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a step shape
// with N levels using the # character.  Make sure the
// step has spaces on the right hand side!
// --- Examples
//   steps(2)
//       '# '
//       '##'
//   steps(3)
//       '#  '
//       '## '
//       '###'
//   steps(4)
//       '#   '
//       '##  '
//       '### '
//       '####'

function steps(n) {
  let hash = '';
  for (let i = 0; i < n; i++) {
    //iterate for length of n
    hash += '#';
    fillSpaces(hash, n);
  }
}

function fillSpaces(hash, n) {
  while (hash.length < n) {
      hash += ' ';
    }
    console.log(hash)
}

steps(8)



module.exports = steps;


/* recursive solution

function steps(n, row = 0, stair = '') {
  if (n === row) {
    return;
  }

  if (n === stair.length) {
    console.log(stair);
    return steps(n, row + 1);
  }
  if (stair.length <= row) {
    stair += '#';
  } else {
    stair += ' ';
  }
  steps(n, row, stair)
}



steps(8)
*/