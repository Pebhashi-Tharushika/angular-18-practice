let message2 = "Hi, Kamal";
console.log(message2);

/* how to define variable */

let grade: number; //declaration
grade = 6; //initialization

let count: number = 17;


/* data types */
let country: string = "Japan";
let age: number = 20;
let weight: number = 63.25;
let isMarried: boolean = false;


/* let(new keyword) , var(old keyword) , const */

if (true) {
    let m: string = "Amal";
    var n: number = 6;
}
// console.log(m); // error: Cannot find name 'm'
console.log(n);

function printUserDetails() {
    let r: string = "Amal";
    var t: number = 6;
}
// console.log(r); // error: Cannot find name 'r'
// console.log(t); // Cannot find name 't'

const pi = 3.14; 
// pi = 3; // error - Cannot assign to 'pi' because it is a constant



/* array Vs Array */

let marks: number[] = [12, 34, 45]; // array
console.log(marks)

let marksArray: Array<number> = [12, 65, 89]; // Array interface
console.log(marksArray)



/* tuple */
let tuple1: [string, number, boolean];  // Declare a tuple type
tuple1 = ["Amal", 37, true];            // Assign values in correct order
console.log(tuple1);


/* function */
function greet(name:string){
    return `hello ${name}!`;
}
console.log(greet('Amal'));
// console.log(greet(23)); // error: Argument of type 'number' is not assignable to parameter of type 'string'



/* js Object vs ts interface */

interface User {
    name: string,
    age: number
}

function processUser(user: User) {
    return `Name: ${user.name}, Age: ${user.age}`;
}

let user1: User = {
    name: "Amal",
    age: 45
};

console.log(processUser(user1)); // Name: Amal, Age: 45

