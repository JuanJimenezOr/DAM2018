var EMAIL_REGEXP = /^[a-z0-9!#$%&'*+\/=?^_`{|}~.-]+@[a-z0-9]([a-z0-9-]*[a-z0-9])?(\.[a-z0-9]([a-z0-9-]*[a-z0-9])?)*$/i;
var people = Array();
function createPeople() {
    var newPerson;
    for (var i = 0; i < 10; i++) {
        newPerson = {
            name: "Daniel" + i,
            email: "d" + i + "@gmail.com",
            salary: (i + 10000),
            active: i % 2 == 0 ? true : false
        };
        people.push(newPerson);
    }
}
function readPeople() {
    people.forEach(function (elemento, indice, array) {
        if (elemento.active == true && EMAIL_REGEXP.test(elemento.email)) {
            console.log(elemento);
        }
    });
}
createPeople();
readPeople();
