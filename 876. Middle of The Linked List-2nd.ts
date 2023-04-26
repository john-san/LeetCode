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
function middleNode(head: ListNode | null): ListNode | null {
	if (!head) return null
	if (!head.next) return head
	let current: ListNode | null = head
	let next: ListNode | null | undefined = head.next
	while (next) {
		current = current!.next
		next = next?.next?.next
	}

	return current
}

console.log(
	middleNode(
		new ListNode(
			1,
			new ListNode(2, new ListNode(3, new ListNode(4, new ListNode(5))))
		)
	)
) // 3
console.log(
	middleNode(
		new ListNode(
			1,
			new ListNode(
				2,
				new ListNode(3, new ListNode(4, new ListNode(5, new ListNode(6))))
			)
		)
	)
) // 4
console.log(middleNode(new ListNode(1))) // 1
console.log(middleNode(new ListNode(1, new ListNode(2)))) // 2
