function forEach(arr, newFunc){
  for(let i = 0; i < arr.length; i++) {
      newFunc(arr[i]);
  }
};

function newFunc(el){
  return el;
};






