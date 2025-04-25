let message = "Hi, Amal";
console.log(message);

/* js function */
function greet(name){
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