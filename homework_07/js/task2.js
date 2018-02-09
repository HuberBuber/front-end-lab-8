var priceNumber;
var userNumber;
var game = confirm("Do you want to play a game?");
var min = 0;
var max = 5;
var price = 0;
var maxPrice = 10;
var goOn;

	if (game == true){
			
			function random(min, max) {
	     	priceNumber = parseInt(Math.random() * (max - min + 1)+ min);
	     	console.log(priceNumber);
	     }
			random(min, max);
			

			for (var i = 1; i <= 3; i++) {
				userNumber = +prompt('choose number from 1 to 5', '');
				
				if (i == 1 && priceNumber == userNumber){
					price = maxPrice;
					console.log('price is ' + price + '$');
					break;
				} else if (i == 2 && priceNumber == userNumber){
					price = maxPrice/2;
					console.log('price is ' + price + '$');
					break;
				} else if (i == 3 && priceNumber == userNumber){
					price = +((maxPrice/2)/2).toFixed();
					console.log('price is ' + price + '$');
					break;
				}
			}

			if (priceNumber != userNumber){
				console.log("Thank you for a game. Your prize is: " + price + "$ Do you want to play again?");
			} else {
				goOn = confirm("Do you want to continue a game?");
			}

			if (goOn == true) {
				max = max * 2;
				random(min, max);
			} else if ( goOn != true && price != 0){
				console.log("Thank you for a game. Your prize is: " + price + "$ Do you want to play again?");
			}

	}else{
		console.log("You didn't become a milionare" );
	}
