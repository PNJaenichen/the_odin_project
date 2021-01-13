const removeFromArray = function(...arguements) {
    let array  = arguements[0];
    let values = arguements.slice(1);
    for (let i = 0; i < values.length; i++) {
        let j = 0;
        while (j < array.length) {
            if (array[j] === values[i]) {
                array.splice(j, 1);
            } else {
                ++j;
            }
        }
    }
    return array;
}

module.exports = removeFromArray
