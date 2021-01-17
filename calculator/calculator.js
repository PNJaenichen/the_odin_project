function add (a,b) {
	return a + b;
}

function subtract (a,b) {
	return a - b;
}

function sum (values) {
	return values.reduce((total,val) => total + val, 0);
}

function multiply (values) {
	return values.reduce((total,val) => total * val, 1);
}

function power(a, b) {
	return a ** b;
}

function factorial(val) {
	if (val === 0) {
		return 1;
	} else {
		let product = val * factorial(val - 1);
		return product;
	}

}

module.exports = {
	add,
	subtract,
	sum,
	multiply,
    power,
	factorial
}