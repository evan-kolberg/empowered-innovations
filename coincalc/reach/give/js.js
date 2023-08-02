function processEntries() {
	var cents = document.getElementById('cents').value;
	if (cents > 0) {
		var quarters = parseInt(cents / 25);
        cents %= 25;
		var dimes = parseInt(cents / 10);
        cents %= 10;
		var nickels = parseInt(cents / 5);
        cents %= 5;
		var pennies = parseInt(cents / 1);
		document.getElementById('q').value = 'Quarters: ' + quarters;
		document.getElementById('d').value = 'Dimes: ' + dimes;
		document.getElementById('n').value = 'Nickels: ' + nickels;
		document.getElementById('p').value = 'Pennies: ' + pennies;
        document.getElementById('cents').value = '';
	} 
    else {
        window.location.reload();
		alert('Error: Value should be above 0');
	}
}

function receive_page() {
	window.location.replace('http://coincalc.oyosite.com/reach/receive/html.html');
}