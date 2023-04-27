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
// function detectCycle(head: ListNode | null): ListNode | null {
// 	// create a set to store visited nodes
// 	const visited = new Set()
// 	let curr = head

// 	while (curr) {
// 		if (visited.has(curr)) {
// 			return curr
// 		}
// 		visited.add(curr)
// 		curr = curr.next
// 	}
// 	return null
// }

// TC: O(n), SC: O(1)
function detectCycle(head: ListNode | null): ListNode | null {
	let slow = head
	let fast = head

	while (fast && fast.next) {
		slow = slow!.next
		fast = fast.next.next

		// if there is a cycle, it means slow and fast will meet at some point
		if (slow === fast) {
			// reset slow to head and move both slow and fast by 1 step
			slow = head
			while (slow !== fast) {
				slow = slow!.next
				fast = fast!.next
			}
			// return the node where slow and fast meet for the second time
			return slow
		}
	}
	// if there is no cycle, then fast will reach null
	return null
}
