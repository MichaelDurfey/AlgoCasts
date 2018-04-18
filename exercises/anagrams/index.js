// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

// function anagrams(stringA, stringB) {
//   let stringOne = stringA.replace(/[^\w]/, "").toLowerCase().split('').every(elem => {
//     return stringB.toLowerCase().includes(elem) === true;
//   })
//   let stringTwo = stringB.replace(/[^\w]/,"").toLowerCase().split('').every(elem => {
//     return stringA.toLowerCase().includes(elem) === true;
//   })
//   return stringOne && stringTwo;
// }

const anagrams = (stringA, stringB) => {
  return cleanString(stringA) === cleanString(stringB);
}

const cleanString = (str) => {
  return str.replace(/[^\w]/g, '').toLowerCase().split('').sort().join('');
}



module.exports = anagrams;


// const anagrams = (stringA, stringB) => {
//   let stringOneMap = buildCharMap(stringA);
//   let stringTwoMap = buildCharMap(stringB);
//   if (Object.keys(stringOneMap).length !== Object.keys(stringTwoMap).length) return false;
//   for (let x in stringOneMap) {
//     if (stringTwoMap[x] !== stringOneMap[x]) {
//       console.log(x)
//       return false;
//     }
//   }
//   return true;
// }

// const buildCharMap = (str) => (
//   str.replace(/[^\w]/g, '').toLowerCase().split('').reduce((acc,curr) => {
//     acc[curr] = acc[curr]++ || 1;
//     return acc
//   }, {})
// )