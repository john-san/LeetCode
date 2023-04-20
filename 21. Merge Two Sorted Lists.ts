//Definition for singly-linked list.
class ListNode {
	val: number;
	next: ListNode | null;
	constructor(val?: number, next?: ListNode | null) {
		this.val = val === undefined ? 0 : val;
		this.next = next === undefined ? null : next;
	}
}

// TC: O(n), SC: O(1)
// merge two sorted lists
function mergeTwoLists(
	list1: ListNode | null,
	list2: ListNode | null
): ListNode | null {
	// edge case
	if (!list1) return list2;
	if (!list2) return list1;

	// create a dummy node
	const dummy = new ListNode();
	// create a pointer
	let pointer = dummy;

	// loop through both lists
	while (list1 && list2) {
		// if list1's val is less than list2's
		if (list1.val < list2.val) {
			// set the pointer's next to list1
			pointer.next = list1;
			// move list1 forward
			list1 = list1.next;
		} else {
			// set the pointer's next to list2
			pointer.next = list2;
			// move list2 forward
			list2 = list2.next;
		}
		// move the pointer forward
		pointer = pointer.next;
	}

	// if list1 is null, set the pointer's next to list2
	if (!list1) pointer.next = list2;
	// if list2 is null, set the pointer's next to list1
	if (!list2) pointer.next = list1;

	// return the dummy's next
	return dummy.next;
}

// create tests
const list1 = new ListNode(1, new ListNode(2, new ListNode(4)));
const list2 = new ListNode(1, new ListNode(3, new ListNode(4)));
console.dir(mergeTwoLists(list1, list2)); // [1,1,2,3,4,4]

// create test for two empty lists
console.dir(mergeTwoLists(null, null)); // null

// create test for one empty list
console.dir(mergeTwoLists(null, new ListNode())); // [0]

function recursiveMergeTwoLists(
	list1: ListNode | null,
	list2: ListNode | null
): ListNode | null {
	// edge case
	if (!list1) return list2;
	if (!list2) return list1;

	// if list1's val is less than list2's
	if (list1.val < list2.val) {
		// set the list1's next to the recursive call
		list1.next = recursiveMergeTwoLists(list1.next, list2);
		// return list1
		return list1;
	} else {
		// set the list2's next to the recursive call
		list2.next = recursiveMergeTwoLists(list1, list2.next);
		// return list2
		return list2;
	}
}

// create tests
