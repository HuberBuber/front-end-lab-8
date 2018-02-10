
var n, i, j, space, brick;

	n = +prompt("Please enter a number from 1 to 20", "0");

if (n <=0 || n > 20 || isNaN(n)) {
	console.error('Incorrect');
} else {
		for (i = 0; i < n; i++){
			space = '';
			brick = '';
			for (j = 0; j < n - i; j++) {
				space = space + '   ';
			}
			for (j = 0; j < 2 * i + 1; j++){
				brick = brick + '[~]';
			}
			console.log(space + brick);
		}
	}






