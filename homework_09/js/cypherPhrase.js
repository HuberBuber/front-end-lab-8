
function cypherPhrase (obj, str){
	 str = str.split('');
	 let str1 = getTransformedArray(str, function(item){
    for (let key in obj) {
      if (item === key) {
        return obj[key];
      }
    }
    return item;
  });
  return str1.join('');
}
