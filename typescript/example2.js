let message = "Hi, Amal";
console.log(message);

/* js function */
function greet(name) {
    return `hello ${name}!`;
}

console.log(greet('Amal'));
console.log(greet(23));


/* js Object */
function processUser(user) {
    return `Name: ${user.name}, Age: ${user.age}`;
}

let user = { name: "Amal", age: 12 }
console.log(processUser(user)) // Name: Amal, Age: 12

let invalidUser = { name: false, age: "Kamal" }
console.log(processUser(invalidUser)) // Name: false, Age: Kamal


/* js have no enums */
const Direction = {
    North: 1,
    East: 2,
    South: 3,
    West: 4
}
console.log(Direction.North); // 1

// == vs ===
console.log(5 == '5'); //true
console.log(5 === '5'); //false