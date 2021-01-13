const sumAll = function(number1, number2) {
    if (typeof(number1) !== 'number' || typeof(number2) !== 'number') {
        return 'ERROR';
    } else if (number1 < 0 || number2 < 0) {
        return 'ERROR';
    } else {
        let sum = 0;
        let start = (number1 < number2 ? number1 : number2);
        let end = (number1 < number2 ? number2 : number1);
        for (let i = start; i <= end; i++) {
            sum += i;
        }
        return sum;
    }
}

module.exports = sumAll
