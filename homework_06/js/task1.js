var a, b, c, p, typeTriangle, square, fix;

	a = +prompt("Please enter the value of side A", "The value cannot be less than or equal to 0");
	b = +prompt("Please enter the value of side B", "The value cannot be less than or equal to 0");
	c = +prompt("Please enter the value of side C", "The value cannot be less than or equal to 0");
	
if ( a*a + b*b == c*c || b*b + c*c == a*a || a*a + c*c == b*b){
	typeTriangle = "right triangle";
} else if (a == b && b == c && a == c) {
	typeTriangle = "equilateral triangle";
} else if (a == b || b == c || a == c) {
	typeTriangle = "isosceles triangle";
} else if (a != b && b != c && a != c) {
	typeTriangle = "scalene triangle";
} 

	p = (a + b + c)/2;
	square = Math.sqrt(p*(p - a)*(p - b)*(p - c));
	fix = +square.toFixed(2);

if (a <= 0 || b <= 0 || c <= 0 || square == 0 || isNaN(square)) {
		console.log('For data ' + a + ', ' + b + ', ' + c + ':' );
		console.log('"Incorrect data"');
	} else {
		console.log('For data ' + a + ', ' + b + ', ' + c + ':' );
		console.log('Type of triangle is ' + typeTriangle + ' and square is: ' + fix);
	}


	
