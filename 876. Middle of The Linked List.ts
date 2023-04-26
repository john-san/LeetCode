// Definition for singly-linked list.
class ListNode {
	val: number
	next: ListNode | null
	constructor(val?: number, next?: ListNode | null) {
		this.val = val === undefined ? 0 : val
		this.next = next === undefined ? null : next
	}
}

// TC: O(n), SC: O(n)
function middleNode(head: ListNode | null): ListNode | null {
	let length = 0
	let current: ListNode | null = head
	// iterate through linked list to get length
	while (current) {
		current = current.next
		// increase length
		length++
	}

	// reset to beginning
	current = head
	let midpoint = 0

	// if length is even
	if (length % 2 == 0) {
		midpoint = Math.floor(length / 2)
		for (let i = 0; i < midpoint; i++) {
			current = current!.next
		}
	} else {
		// length is odd
		midpoint = (length - 1) / 2
		for (let i = 0; i < midpoint; i++) {
			current = current!.next
		}
	}

	return current
}

/* alternate solution

function middleNode(head: ListNode | null): ListNode | null {
  let slow: ListNode | null = head;
  let fast: ListNode | null = head;
  while (fast != null && fast.next != null) {
    slow = slow.next;
    fast = fast.next.next;
  }
  return slow;
};
// TC: O(n), SC: O(1)
*/
