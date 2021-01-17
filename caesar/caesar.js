const caesar = function(str, encode) {
    let steps = encode % 26;
    let encoded = str.split("").map(letter => {
        if (letter.toUpperCase() === letter.toLowerCase()) {
            return letter;
        } else {
            let uni = letter.charCodeAt(0);
            if (uni >= 65 && uni <= 90) {
                uni += steps;
                if (uni > 90) {
                    uni = (uni - 90) + 64;
                } else if (uni < 65) {
                    uni = 91 - (65 - uni);
                }
            } else if (uni >= 97 && uni <= 122) {
                uni += steps;
                if (uni > 122) {
                    uni = (uni - 122) + 96;
                } else if (uni < 97) {
                    uni = 123 - (97 - unit);
                }
            }
            return String.fromCharCode(uni);
            }
        }
    );
    return encoded.join('');
}

module.exports = caesar
