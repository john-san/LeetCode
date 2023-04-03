/**
 * @param {number[]} plants
 * @param {number} capacity
 * @return {number}
 */
var wateringPlants = function (plants, capacity) {
	let currentCapacity = capacity;
	let steps = 0;

	for (let i = 0; i < plants.length; i++) {
		// step to current plant
		steps++;

		// water the plant
		currentCapacity -= plants[i];

		// pre-emptively check if we have the capacity to fill NEXT plant
		if (i + 1 != plants.length && currentCapacity < plants[i + 1]) {
			// move to refill
			steps += i + 1;
			// refill
			currentCapacity = capacity;
			// move back to current plant
			steps += i + 1;
		}
	}

	return steps;
};

// console.log(wateringPlants([2, 2, 3, 3], 5));
// console.log(wateringPlants([1, 1, 1, 4, 2, 3], 4));
console.log(wateringPlants([3, 2, 4, 2, 1], 6));
