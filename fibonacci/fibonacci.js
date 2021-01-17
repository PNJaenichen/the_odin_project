const fibonacci = function(nth) {
    if (nth < 0) {
        return 'OOPS'
    } else if (nth === 0) {
        return 0;
    } else if (nth === 1 || nth === 2) {
        return 1;
    } else {
        // [Phi^n - (1/Phi)^n] / Sqrt[5]
        return Math.floor((((1 + Math.sqrt(5)) / 2)**nth - ((1 - Math.sqrt(5)) / 2)**nth) / Math.sqrt(5));
    } 
}

module.exports = fibonacci
