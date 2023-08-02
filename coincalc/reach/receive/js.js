function processEntries() {
	var quarters = document.getElementById('q').value;
	var dimes = document.getElementById('d').value;
	var nickels = document.getElementById('n').value;
	var pennies = document.getElementById('p').value;

    var total = (quarters * 25) + (dimes * 10) + (nickels * 5) + (pennies * 1)
        
	document.getElementById('cents').value = total;
} 


function give_page() {
	window.location.replace('http://coincalc.oyosite.com/reach/give/html.html');
}