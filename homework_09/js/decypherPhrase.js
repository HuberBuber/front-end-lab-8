
function decypherPhrase (obj, str){
	 const newObj = {};
	 for (let key in obj){
	 		newObj[obj[key]] = key;
	 }
	 return cypherPhrase (newObj, str);
};
