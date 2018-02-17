
function collectIds(arr){

	let bigRate = getFilteredArray(arr, function(index){
		return index.rating > 3;
	});
	
	return getTransformedArray(bigRate, function(index){
		 return index.id;
	});
}
