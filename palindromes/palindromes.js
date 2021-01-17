const palindromes = function(str) {
    let punctuation = '!"#$%&\'()*+,-./:;<=>?@[\\]^_`{|}~ ';
    let noPunc = str.split('').filter(letter => punctuation.indexOf(letter) === -1);
    let original = noPunc.join("");
    let reverse = noPunc.reverse().join("");
    if (original.toLowerCase() === reverse.toLowerCase()) {
        return true;
    } else {
        return false;
    }
}

module.exports = palindromes
