function reverseNumber(numb){
	let res = numb.toString();
			res = res.split('');
			res = res.reverse();
				if (numb < 0) {
					res.pop();
					res.unshift('-');
				}
			res = res.join('');
			res = parseInt(res);
			return res;
}