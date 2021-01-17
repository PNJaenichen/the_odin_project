let findTheOldest = function(people) {
    let currentYear = (new Date()).getFullYear();
    const oldest = people.sort(function(a,b) {
        const lastPerson = (a.hasOwnProperty('yearOfDeath') ? a.yearOfDeath : currentYear) - a.yearOfBirth;
        const nextPerson = (b.hasOwnProperty('yearOfDeath') ? b.yearOfDeath : currentYear) - b.yearOfBirth;
        return lastPerson > nextPerson ? -1 : 1;
    })
    return oldest[0];
}

module.exports = findTheOldest
