// Definition for singly-linked list.
class ListNode {
	val: number
	next: ListNode | null
	constructor(val?: number, next?: ListNode | null) {
		this.val = val === undefined ? 0 : val
		this.next = next === undefined ? null : next
	}
}

// TC: O(n), SC: O(1)
// function reverseList(head: ListNode | null): ListNode | null {
// 	// iterative solution
// 	let prev: ListNode | null = null;
// 	let curr = head;
// 	while (curr) {
// 		const next = curr.next;
// 		curr.next = prev;
// 		prev = curr;
// 		curr = next;
// 	}
// 	return prev;

// }

// TC: O(n) [visiting over every node 1 time], SC: O(n) [Function call stack space]
//recursive solution
function reverseList(head: ListNode | null): ListNode | null {
	if (!head || !head.next) return head

	const newHead = reverseList(head.next)
	head.next.next = head
	head.next = null

	return newHead
}

// test
const head = new ListNode(
	1,
	new ListNode(2, new ListNode(3, new ListNode(4, new ListNode(5))))
)
console.log(reverseList(head))

// test 2
const head2 = new ListNode(1, new ListNode(2))
console.log(reverseList(head2))

// test 3
const head3 = null
console.log(reverseList(head3))
