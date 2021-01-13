const repeatString = function(strng, mult) {
    if (mult < 0) {
        return 'ERROR'
    }
    let result = '';
    let i = 0;
        for (i; i < mult; i++) {
            result += strng;
    }
    return result;
}

module.exports = repeatString
