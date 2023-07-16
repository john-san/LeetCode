/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function (l1, l2) {
  // create a dummy node
  let dummy = new ListNode(0);
  // create a pointer to the dummy node
  let pointer = dummy;
  // create a carry variable
  let carry = 0;
  // loop through the linked lists
  while (l1 || l2) {
    let num1 = l1 ? l1.val : 0;
    let num2 = l2 ? l2.val : 0;
    // add the values of the nodes
    let sum = num1 + num2 + carry;
    // if the sum is greater than 9
    if (sum > 9) {
      // set carry to 1
      carry = 1;
      // set sum to the remainder
      sum = sum % 10;
    } else {
      // set carry to 0
      carry = 0;
    }

    // create a new node with the sum
    let newNode = new ListNode(sum);
    // set the pointer's next to the new node
    pointer.next = newNode;
    // move the pointer to the next node
    pointer = pointer.next;
    // move the l1 and l2 pointers to the next node
    if (l1) l1 = l1.next;
    if (l2) l2 = l2.next;
  }

  // edge case for if there is a remaining carry after the loop
  if (carry) {
    // create a new node with the carry
    let newNode = new ListNode(carry);
    // set the pointer's next to the new node
    pointer.next = newNode;
  }

  // return the dummy's next
  return dummy.next;
};
