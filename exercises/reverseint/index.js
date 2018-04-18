// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-90) === -9
//   reverseInt(-15) === -51

const reverseInt = (num) => {
  const numString = num.toString().split('');
  let negative = false;
  if (numString[0] === '-') {
    return Number('-' + numString.splice(1).reverse().join(''));
  } else {
    return Number(numString.reverse().join(''));
  }
}

module.exports = reverseInt;

