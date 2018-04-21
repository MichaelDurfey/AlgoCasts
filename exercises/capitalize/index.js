// --- Directions
// Write a function that accepts a string.  The function should
// capitalize the first letter of each word in the string then
// return the capitalized string.
// --- Examples
//   capitalize('a short sentence') --> 'A Short Sentence'
//   capitalize('a lazy fox') --> 'A Lazy Fox'
//   capitalize('look, it is working!') --> 'Look, It Is Working!'

function capitalize(str) {
  let newString = ''
  for (let i = 0; i < str.length; i++) {
    if (str[i - 1] === undefined || str[i - 1] === ' ') {
      newString += str[i].toUpperCase();
    } else {
      newString += str[i];
    }
  }
  return newString;
}

capitalize('a short sentence')

module.exports = capitalize;

// function capitalize(str) {
//   return str.split(' ').map(i =>  {
//     let first = i[0]
//     let theRest = i.split('').slice(1);
//     return first.toUpperCase() + theRest.join('');
//   }).join(' ')

// }