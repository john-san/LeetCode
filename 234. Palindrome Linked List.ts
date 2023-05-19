/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

// TC: O(2n) == O(n), SC: O(1)
function isPalindrome(head: ListNode | null): boolean {
	// helper function to reverse a linked list
	const reverseLinkedList = (head: ListNode | null): ListNode | null => {
		let prev: ListNode | null = null
		let curr: ListNode | null = head

		while (curr !== null) {
			let next = curr.next
			curr.next = prev
			prev = curr
			curr = next
		}
		return prev
	}

	// helper function to find the middle of a linked list
	const getMiddleNode = (head: ListNode | null): ListNode | null => {
		// use slow and fast pointers to find the middle node.
		let slow: ListNode | null = head
		let fast: ListNode | null = head

		while (fast !== null && fast.next !== null) {
			slow = slow!.next
			fast = fast.next.next
		}

		return slow
	}

	const middleNode = getMiddleNode(head)
	let curr: ListNode | null = head
	let reversed = reverseLinkedList(middleNode)

	// compare the reversed linked list with the original linked list until the reversed linked list is null
	while (reversed !== null) {
		// if at any point the values are not equal, return false
		if (reversed.val !== curr!.val) {
			return false
		}
		// move the reversed and original linked lists forward
		reversed = reversed.next
		curr = curr!.next
	}

	return true
}
