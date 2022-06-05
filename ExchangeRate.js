$(function(){

		$.get('http://data.fixer.io/api/latest', {'access_key': 'bcbb764eca7a6756f3452493d118f6d6'}, function(data){

			let Usd = (data.rates.RUB / data.rates.USD);
			let usd = Usd.toFixed(6);

    		$('#exchange-rate-euro').html('Евро: ' + data.rates.RUB);
    		$('#exchange-rate-usd').html('Доллар: ' + usd);
		});
});
