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


/* let(new kewword) , var(old keyword) , const */

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