// --- Directions
// 1) Implement the Node class to create
// a binary search tree.  The constructor
// should initialize values 'data', 'left',
// and 'right'.
// 2) Implement the 'insert' method for the
// Node class.  Insert should accept an argument
// 'data', then create an insert a new node
// at the appropriate location in the tree.
// 3) Implement the 'contains' method for the Node
// class.  Contains should accept a 'data' argument
// and return the Node in the tree with the same value.

class Node {
  constructor(value) {
    this.data = value;
    this.left = null;
    this.right = null;
  }
  insert(data) {

    if (this.data > data && this.left) {
      this.left.insert(data)
    } else if (this.data > data) {
      this.left = new Node(data);
    } else if (this.data < data && this.right) {
      this.right.insert(data);
    } else if (this.data < data) {
      this.right = new Node(data);
    }

  }

  contains(data) {
    let queue = [this];
    while (queue.length) {
      let node = queue.shift();
      if (node.data === data) {
        return node;
      } 
      if (node.left) {
        queue.push(node.left);
      } 
      if (node.right) {
        queue.push(node.right);
      }
    }
    return null;
  }
}

module.exports = Node;
