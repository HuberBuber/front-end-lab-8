var game = confirm("Do you want to play a game?");
var prizeNumber;
var userNumber;
var min = 0;
var max = 5;
var prize = 0;
var maxPrize = 10;
var totalPrize = 0;
var possiblePrize;
var goOn = true;

	if (game == true){

		while (goOn == true){

			prizeNumber = Math.floor(Math.random() * (max - min + 1));
			possiblePrize = maxPrize;

				for (var i = 3; i > 0; i--) {
					userNumber = +prompt("Enter a number from 0 to " + max + "\n" + "Attemts left: " + i +  "\n" + "Total prize: " + totalPrize + "$\n" + "Possible prize in current attempt: " + possiblePrize + "$");
					if (userNumber < 0 || isNaN(userNumber) || userNumber > max){
						console.error("Error, wrong number!");
					} else if (i == 3 && prizeNumber == userNumber){
						prize = maxPrize;
						break;
					} else if (i == 2 && prizeNumber == userNumber){
						prize = maxPrize/2;
						break;
					} else if (i == 1 && prizeNumber == userNumber){
						prize = Math.floor((maxPrize/2)/2);
						break;
					}
					possiblePrize = Math.floor(possiblePrize/2);
				}

				totalPrize = totalPrize + prize;

				if (prizeNumber != userNumber){
					totalPrize = 0;
					console.log("Thank you for a game. Your prize is: " + totalPrize + "$");
					goOn = confirm("Do you want to play a game?");
					prize = 0;
					max = 5;
					maxPrize = 10;
				} 
				
				if (prizeNumber == userNumber) {
					goOn = confirm("Do you want to continue a game?");
				} 
				
				if (goOn == true && prizeNumber == userNumber) {
					max = max * 2;
					maxPrize = maxPrize * 3;
					i = 3;
				} else if (goOn != true && totalPrize != 0){
					console.log("Thank you for a game. Your prize is: " + totalPrize + "$");
					goOn = confirm("Do you want to play a game?");
					prize = 0;
					max = 5;
					maxPrize = 10;
					totalPrize = 0;
				}		
		}

	} else {
		console.log("You didn't become a milionare" );
	}
