/*
A Thief has a knapsack that can hold X lbs of stolen goods
Each stolen good is worth a certain amount of cash, but
the stolen good also weighs a certain weight. This means that
the thief has to pick an optimal combination of items!
The Thief can't pick the same item twice.

What is the maximum worth of goods that the thief can steal?
*/

// Use a binary tree to keep track of all solution combinations
'use strict';

class _Node {
  constructor () {
    this.index = null; // for debug
    this.totalVal = 0;  // running total so far
    this.totalWeight = 0;
    this.no = null;
    this.yes = null;
  }
  
}

class _Tree {
  constructor (goods, capacity) {
    this.goods = goods;
    this.capacity = capacity;
    this.head = new _Node();
    this.results = [];
  }
  
  _add(node) {
    // calculate new total value with the node value
    var newTotalWeight = Infinity;
    if (node.index < this.goods.length) {
      newTotalWeight = node.totalWeight + this.goods[node.index].weight
    }
    //console.log(newTotalWeight);
    if (newTotalWeight > this.capacity) {
      this.results.push(node.totalVal);
      return;
    } else {
      // create 'no' child: the current item is not added
      var noChild = new _Node();
      noChild.index = node.index + 1;
      noChild.totalWeight = node.totalWeight;
      noChild.totalVal = node.totalVal;
      node.no = noChild;
      this._add(noChild);
      
      // create 'yes' child: current item is added
      var yesChild = new _Node();
      yesChild.index = node.index + 1;
      yesChild.totalWeight = newTotalWeight;
      yesChild.totalVal = node.totalVal + this.goods[node.index].val;
      node.yes = yesChild;  
      this._add(yesChild);
    }
  }
  
  populate() {
    this.head.index = 0;
    this.head.totalWeight = 0;
    this.head.totalValue = 0;
    this._add(this.head);
    
    console.log('results:', this.results);
    
    return this.results.reduce((acc,val) => {
      return val > acc ? val : acc; 
    }, 0);
  }
}

var knapsack = function(goods, capacity) {
  var tree = new _Tree(goods, capacity);
  return tree.populate();
}

// Some edge test cases
console.log(knapsack([ {val: 10, weight: 5}, {val: 3, weight: 7}, {val: 1, weight: 50},
  {val: 20, weight: 3}], 15));
  
console.log(knapsack([ {val: 6, weight: 6}, {val: 5, weight: 5}, {val: 5, weight: 5}], 10));  // 10 optimal

console.log(knapsack([ {val: 1, weight: 1}, {val: 5, weight: 5}], 5));  // 5 optimal