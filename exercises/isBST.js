const isBST = (root, min = Number.MIN_SAFE_INTEGER, max = Number.MAX_SAFE_INTEGER) => {
  if (root === null) return true;
  if (root.data < min || root.data > max) {
    return false;
  }
  return isBST(root.left, min, root.data) && isBST(root.right, root.data, max)
}

const bst = {
  data: 10,
  left:
   Node {
     data: 5,
     left: Node { data: 0, left: null, right: null },
     right: null },
  right:
   Node {
     data: 15,
     left: null,
     right: Node { data: 20, left: null, right: null } } }