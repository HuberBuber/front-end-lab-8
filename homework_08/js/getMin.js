let arr = [0, 5, 6,-12, 8, -5];

function compare (a, b) {
	return a - b;
}
arr.sort(compare);
console.log(arr[0]);