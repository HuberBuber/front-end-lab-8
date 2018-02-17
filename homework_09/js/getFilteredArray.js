function getFilteredArray(arr, predicateFunction){
	let arr2 = [];
	arr.forEach(function(arr){
		if(predicateFunction(arr)){
			arr2.push(arr);
		}
	});
	return arr2;
}

function predicateFunction(num) { 
return num > 3;
}
