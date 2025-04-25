var message2 = "Hi, Kamal";
console.log(message2);
/* how to define variable */
var grade; //declaration
grade = 6; //initialization
var count = 17;
/* data types */
var country = "Japan";
var age = 20;
var weight = 63.25;
var isMarried = false;
/* let(new keyword) , var(old keyword) , const */
if (true) {
    var m = "Amal";
    var n = 6;
}
// console.log(m); // error: Cannot find name 'm'
console.log(n);
function printUserDetails() {
    var r = "Amal";
    var t = 6;
}
// console.log(r); // error: Cannot find name 'r'
// console.log(t); // Cannot find name 't'
var pi = 3.14;
// pi = 3; // error - Cannot assign to 'pi' because it is a constant
/* array Vs Array */
var marks = [12, 34, 45]; // array
console.log(marks);
var marksArray = [12, 65, 89]; // Array interface
console.log(marksArray);
/* tuple */
var tuple1; // Declare a tuple type
tuple1 = ["Amal", 37, true]; // Assign values in correct order
console.log(tuple1);
/* function */
function greet(name) {
    return "hello ".concat(name, "!");
}
console.log(greet('Amal'));
console.log(greet(23));
