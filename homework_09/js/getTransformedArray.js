function getTransformedArray(arr, increment){
	let arr1 = [];
	arr.forEach(function(arr){
		arr1.push(increment(arr));
	});
	return arr1;
}

function increment(num) { 
	return num + 1;
};
