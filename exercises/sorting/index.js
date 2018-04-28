// --- Directions
// Implement bubbleSort, selectionSort, and mergeSort

// function bubbleSort(arr) {
//   let sorted = false;
//   let max = arr.length;
//   while (!sorted) {
//     sorted = true;
//     for (let i = 0; i < max; i++) {
//       if (arr[i - 1] > arr[i]) {
//         sorted = false;
//         let temp = arr[i - 1];
//         arr[i - 1] = arr[i];
//         arr[i] = temp;
//       }
//     }
//   }
//   return arr;
// }

function bubbleSort(arr) {
  
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < (arr.length - i - 1); j++) {
      if (arr[j+1] < arr[j]) {
        const lesser = arr[j + 1];
        arr[j + 1] = arr[j];
        arr[j] = lesser;
      }
    }
  }
  return arr;
}

function selectionSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    // set min value to i
    let indexOfMin = i;
    for (let j = i + 1; j < arr.length; j++) {
      // update index of min if appropriate
      if (arr[indexOfMin] > arr[j]) {
        indexOfMin = j;
      }
    }
    if (indexOfMin !== i) {
      let temp = arr[indexOfMin];
      arr[indexOfMin] = arr[i];
      arr[i] = temp;
     }
  }
  return arr;
}

function mergeSort(arr) {
  if (arr.length === 1) {
    return arr;
  }
  let midpoint = Math.floor(arr.length / 2);
  let left = arr.slice(0, midpoint);
  let right = arr.slice(midpoint);
  return merge(mergeSort(left), mergeSort(right))
}

function merge(left, right) {
  const results = [];
  while(left.length && right.length) {

    if (left[0] < right[0]) {
      results.push(left.shift());
    } else {
      results.push(right.shift())
    }
  }
  // return [...results, ...left, ...right];
  return results.concat(left).concat(right);
}

module.exports = { bubbleSort, selectionSort, mergeSort, merge};
