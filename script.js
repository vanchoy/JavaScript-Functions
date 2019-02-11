function calculateAge(yearOfBirth) {
    var age = 2016 - yearOfBirth;
    return age;
}

var ageIvan = calculateAge(1990);
var agePeter = calculateAge(1969);
var ageLily = calculateAge(1998);
console.log(ageIvan);

function yearsUntilRetirement(name, year) {
    var age = calculateAge(year);
    var retirement = 65 - age;
    if (retirement >= 0) {
        console.log(name + ' retires in ' + retirement + ' years.');
    } else {
        console.log(name + ' has already retired.');
    }
}

yearsUntilRetirement('Ivan', 1990);
yearsUntilRetirement('Peter', 1969);
yearsUntilRetirement('Lily', 1948);
