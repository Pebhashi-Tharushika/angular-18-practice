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
function greet(name: string) {
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



/* extends interface */
interface Person {
    name: string;
    age: number;
}

interface Employee extends Person {
    department: string;
}

const emp: Employee = {
    name: "Sanu",
    age: 25,
    department: "Engineering"
};

console.log(emp.name);       // Sanu
console.log(emp.age);       // 25
console.log(emp.department); // Engineering

/* object vs Object in ts */

/*----- object (represent primitives that are boxed and non-primitive types (objects)) -----*/
let obj: object = { name: "Alice", age: 30 };  // Valid
obj = [1, 2, 3];  // Valid
// obj = "hello"; //Error: Type 'string' is not assignable to type 'object' - b'coz string is primitive data type

/*----- Object -----*/
let obj2: Object = { name: "Alice" };  // Valid
obj2 = 10;  // Valid, because Number(10) is an object
obj2 = "hello";  // Valid, because String("hello") is an object



/* ? - optional */

/* ? with interface properties */
interface Student {
    name: string,
    age?: number // optional character
}

function displayStudentInfo(user: Student) {
    return `Name: ${user.name}, Age: ${user.age}`;
}

let student: Student = {
    name: "Saman"
};

console.log(displayStudentInfo(student)); // Name: Saman, Age: undefined



/* ? with function parameers */
function showPersonelInfo(name:string, age?:number){
    console.log(name);
    console.log(age);
}

showPersonelInfo("Amal");
//Amal
//undefined