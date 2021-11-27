function sumItems(array) {
	let sum = 0;

  for (let num of array) {
		if (Array.isArray(num)) sum += sumItems(num); // recursive case
    else sum += num; // base case
	}
	return sum;
}

// console.log(sumItems([[1, 2, [[3], 4]], 5, []]))

module.exports = sumItems;
