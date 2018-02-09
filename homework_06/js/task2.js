var euro, usd, euroInUah, usdInUah, rateEuro, rateUsd, oneEuro;
rateEuro = 33.9690;
rateUsd = 27.4757;

	euro = +prompt("Enter the amount in EURO", "");
	usd = +prompt("Enter the amount in USD", "");

euroInUah = euro * rateEuro;
usdInUah = usd * rateUsd;
oneEuro = rateEuro / rateUsd;

if (isNaN(euro) || isNaN(usd)) {
		console.log('For data ' + euro + ', ' + usd + ':' );
		console.log('"Incorrect data"');
	} else {
		console.log('For data ' + euro + ', ' + usd + ':' );
		console.log(euro + ' euros are equal ' + euroInUah.toFixed(2) + ' UAH, ' + 
							usd + ' dollars are equal ' + usdInUah.toFixed(2) + ' UAH, ' + 
							'one euro is equal ' + oneEuro.toFixed(2) + ' dollars.');
	}

