// --- Directions
// Given the root node of a tree, return
// an array where each element is the width
// of the tree at each level.
// --- Example
// Given:
//     0
//   / |  \
// 1   2   3
// |       |
// 4       5
// Answer: [1, 3, 2]

function levelWidth(root) {
  // mark each node with a level value ?
  let queue = [root, 's'];
  let counters = [0];

  while(queue.length > 1) {
    let node = queue.shift()
    if (node === 's') {
      counters.push(0);
      queue.push('s');
    } else {
      queue.push(...node.children);
      counters[counters.length - 1]++;
    }
  }
  return counters;
  // reduce queue with result array as accumulator.
    // add up occurences of each level number attribute on each node
    // push result to result array with number 1 within it
}

module.exports = levelWidth;
