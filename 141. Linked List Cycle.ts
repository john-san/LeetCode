// Definition for singly-linked list.
class ListNode {
	val: number
	next: ListNode | null
	constructor(val?: number, next?: ListNode | null) {
		this.val = val === undefined ? 0 : val
		this.next = next === undefined ? null : next
	}
}

// TC: O(n/2) == O(n), SC: O(1)
function hasCycle(head: ListNode | null): boolean {
	// slow and fast pointers problem
	// if there is a cycle, the fast pointer will eventually catch up to the slow pointer
	// if there is no cycle, the fast pointer will reach the end of the list

	let slow = head
	let fast = head

	// since fast is moving 2x as fast as slow, we need to check if fast and fast.next are null
	while (fast !== null && fast.next !== null) {
		// move slow and fast pointers
		slow = slow!.next
		fast = fast.next.next

		// if slow and fast are equal, there is a cycle
		if (slow === fast) return true
	}

	return false
}
