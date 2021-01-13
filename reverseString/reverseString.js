const reverseString = function(strg) {
    let revStr = '';
    for (let i = strg.length - 1; i >= 0; i--) {
        revStr += strg[i];
    }
    return revStr;
}

module.exports = reverseString
