function ListNode(val) {
  this.val = val;
  this.next = null;
}


var makeList = (nums, n = 1) => {
 var myList = new ListNode(nums[0]);
 // set node value to newList.next
 var node = myList;
 while (n < nums.length) {
     node.next = new ListNode(nums[Number(n)])
     node = node.next;
     n++
 }
 return myList;
}


var addTwoNumbers = function(l1, l2) {
  var node = l1;
  var node2 = l2;
  const ret = new ListNode();
  let cur = ret;
  let carry;
      let result = [];
  while (node || node2) {
    let current = add(node, node2, carry)
      cur.val = current.val;
      carry = current.carry;
      
      if(node) node = node.next;
      if(node2) node2 = node2.next;
      if (node || node2) {
        cur.next = new ListNode();
        cur = cur.next;
      }
  }
  if (carry) {
    cur.next = new ListNode(carry)
  }
  let returnNode = ret;
      while(returnNode){
          result.push(returnNode.val)
          returnNode = returnNode.next;
      }

  return result;
};

function add(p1, p2, _carry = 0) {
    let val = ((p1 && p1.val) || 0) + ((p2 && p2.val) || 0) + _carry
    let carry = (val >= 10) ? 1 : 0
    if (carry) { val -= 10 }
    return { val, carry }
}

