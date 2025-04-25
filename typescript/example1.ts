let message2 = "Hi, Kamal";
console.log(message2);

/*----------------------- how to define variable -------------------------*/

let grade: number; //declaration
grade = 6; //initialization

let count: number = 17;


/*-------------------------- data types ----------------------------*/
let country: string = "Japan";
let age: number = 20;
let weight: number = 63.25;
let isMarried: boolean = false;


/*----------------- let(new keyword) , var(old keyword) , const -----------------*/

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



/*---------------------- array Vs Array --------------------*/

let marks: number[] = [12, 34, 45]; // array
console.log(marks)

let marksArray: Array<number> = [12, 65, 89]; // Array interface
console.log(marksArray)



/*---------------------------- tuple --------------------------*/
let tuple1: [string, number, boolean];  // Declare a tuple type
tuple1 = ["Amal", 37, true];            // Assign values in correct order
console.log(tuple1);


/*-------------------------- function -------------------------*/
function greet(name: string) {
    return `hello ${name}!`;
}
console.log(greet('Amal'));
// console.log(greet(23)); // error: Argument of type 'number' is not assignable to parameter of type 'string'



/*--------------------------- js Object vs ts interface ----------------------*/

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



/*----------------------------- object vs Object in ts -------------------------------*/

/*----- object (represent primitives that are boxed and non-primitive types (objects)) -----*/
let obj: object = { name: "Alice", age: 30 };  // Valid
obj = [1, 2, 3];  // Valid
// obj = "hello"; //Error: Type 'string' is not assignable to type 'object' - b'coz string is primitive data type

/*----- Object -----*/
let obj2: Object = { name: "Alice" };  // Valid
obj2 = 10;  // Valid, because Number(10) is an object
obj2 = "hello";  // Valid, because String("hello") is an object



/*----------------------------- ? - optional ------------------------------*/

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
function showPersonelInfo(name: string, age?: number) {
    console.log(name);
    console.log(age);
}

showPersonelInfo("Amal");
//Amal
//undefined



/*-------------------------------- enum ------------------------------*/
enum Direction {
    North,
    East,
    South,
    West
}
let dir: Direction = Direction.North;
console.log(dir); // 0


/* enum  with custom values */
enum colors {
    RED = 100,
    GREEN = 200,
    BLUE = 300,
    WHITE = 400
}
console.log(colors.BLUE); // 100



/*---------------------------- alias ----------------------------*/
type MyString = string;

let myName: MyString = "Amal"; // same as:- let name: string


/* object type alias */

type Owner = {
    name: string,
    age: number
};

const owner1: Owner = {
    name: "Sanu",
    age: 28,
};



/* function type alias */

type greet = (name: string) => string;

let greetUser: greet = (name: string) => `Hello ${name}!`;
let greetCustomer: greet = (customerName: string) => `Welcome ${customerName}`;

console.log(greetUser("Amal"));
console.log(greetCustomer('Kamal'));


type display = () => void;

let displayResult: display = () => { console.log('display something') };
let displayAverageMarks: display = () => {
    let avg = (45 + 59 + 75) / 3;
    console.log("average marks: " + Math.round(avg * 100) / 100);
};

displayResult();
displayAverageMarks();

// () => {...} arrow function



/* tuple type alias */

type Point = [number, number];
let coordinate: Point = [14, 27];

console.log(coordinate);



/* union type alias */

type Status = "success" | "error" | "loading";

let currentStatus: Status = "loading";
currentStatus = "error";
// currentStatus = "done"; //Error: Type '"done"' is not assignable to type 'Status'.

type id = string | number;



/* intersection type alias */

type ItemName = {
    name: string
}

type ItemCode = {
    code: number
}

type ItemExpired = {
    isExpired: boolean
}

type Item = ItemName & ItemCode & ItemExpired;

let item1: Item = {
    name: "Fresh Milk",
    code: 34,
    isExpired: false
}

console.log(item1); //{ name: 'Fresh Milk', code: 34, isExpired: false }



/*-------------------------------- any ------------------------------*/
let a: any;
console.log('a: ' + a + ' - ' + typeof a); // a: undefined - undefined

a = 26;
console.log('a: ' + a + ' - ' + typeof a); // a: 26 - number

a = true;
console.log('a: ' + a + ' - ' + typeof a); // a: true - boolean

a = "Japan";
console.log('a: ' + a + ' - ' + typeof a); // a: Japan - string

a = 5.3;
console.log('a: ' + a + ' - ' + typeof a); // a: 5.3 - number

a = [1, 2, 3, 4, 5];
console.log('a: ' + a + ' - ' + typeof a); // a: 1,2,3,4,5 - object

a = { 'id': 1, 'name': 'ABC' };
console.log('a: ' + a + ' - ' + typeof a); // a: [object Object] - object

a = null;
console.log('a: ' + a + ' - ' + typeof a); // a: null - object

a = undefined;
console.log('a: ' + a + ' - ' + typeof a); // a: undefined - undefined

// a = any; // 'any' only refers to a type, it can't be used as a value here.

// a = unknown; // 'unknown' only refers to a type, it can't be used as a value here.




/*------------------------------- unknown -------------------------------*/
let b: unknown;
console.log('b: ' + b + ' - ' + typeof b); // b: undefined - undefined

b = 26;
console.log('b: ' + b + ' - ' + typeof b); // b: 26 - number

b = true;
console.log('b: ' + b + ' - ' + typeof b); // b: true - boolean

b = "Japan";
console.log('b: ' + b + ' - ' + typeof b); // b: Japan - string

b = 5.3;
console.log('b: ' + b + ' - ' + typeof b); // b: 5.3 - number

b = [1, 2, 3, 4, 5];
console.log('b: ' + b + ' - ' + typeof b); // b: 1,2,3,4,5 - object

b = { 'id': 1, 'name': 'ABC' };
console.log('b: ' + b + ' - ' + typeof b); // b: [object Object] - object

b = null;
console.log('b: ' + b + ' - ' + typeof b); // b: null - object

b = undefined;
console.log('b: ' + b + ' - ' + typeof b); // b: undefined - undefined

// b = any; // 'any' only refers to a type, it can't be used as a value here.

// b = unknown; // 'unknown' only refers to a type, it can't be used as a value here.




/*----------------------------------- undefined -------------------------------------*/

let x;
console.log(x); // undefined
console.log(typeof x); // undefined

let y: number = 22;
console.log(y); // 22
console.log(typeof y); // number

let z: undefined = undefined;
console.log(z); // undefined
console.log(typeof z); // undefined


let c;
console.log('c: ' + c + ' - ' + typeof c); // c: undefined - undefined

c = 26;
console.log('c: ' + c + ' - ' + typeof c); // c: 26 - number

c = true;
console.log('c: ' + c + ' - ' + typeof c); // c: true - boolean

c = "Japan";
console.log('c: ' + c + ' - ' + typeof c); // c: Japan - string

c = 5.3;
console.log('c: ' + c + ' - ' + typeof c); // c: 5.3 - number

c = [1, 2, 3, 4, 5];
console.log('c: ' + c + ' - ' + typeof c); // c: 1,2,3,4,5 - object

c = { 'id': 1, 'name': 'ABC' };
console.log('c: ' + c + ' - ' + typeof c); // c: [object Object] - object

c = null;
console.log('c: ' + c + ' - ' + typeof c); // c: null - object

c = undefined;
console.log('c: ' + c + ' - ' + typeof c); // c: undefined - undefined

// c = any; // 'any' only refers to a type, it can't be used as a value here.

// c = unknown; // 'unknown' only refers to a type, it can't be used as a value here.


let d: undefined = undefined;
// d = 10; // Error - Type '10' is not assignable to type 'undefined'
// d = {};
// d = null;
d = undefined;





/*------------------------------ null -------------------------*/

let p: number | null = null;

let q: number | null = 6;
q = null;
q = 57;

let r = null;
console.log('r: ' + r + ' - ' + typeof r); // r: null - object

let s: null = null;
console.log('s: ' + s + ' - ' + typeof s); // s: null - object


let t = "saved";
// t = null; //Error - Type 'null' is not assignable to type 'string'.

let u: Array<string> = ["abc", "def", "ghi"];
console.log(typeof u); //object
// u = null; // Error - Type 'null' is not assignable to type 'string[]'


let v: null = null;
//  v = "success"; // Error - Type '"success"' is not assignable to type 'null'.


let e: null;

// e = 26; // Error - Type '26' is not assignable to type 'null'

// e = true; // Error - Type 'true' is not assignable to type 'null'.

// e = "Japan"; // Error 

// e = 5.3; // Error 

// e = [1, 2, 3, 4, 5]; // Error

// e = { 'id': 1, 'name': 'ABC' }; // Error

e = null;
console.log('e: ' + e + ' - ' + typeof e); // e: null - object

// e = undefined;

// e = any; // 'any' only refers to a type, it can't be used as a value here.

// e = unknown; // 'unknown' only refers to a type, it can't be used as a value here.






/*-------------------------- type assertion ------------------------------*/

let value: any = "Hello World";
let strLength2 = (value as string).length; // 'as' syntax (recommended)
let strLength1 = (<string>value).length;  // Angle-bracket syntax


/*----------- type assertion and any ----------*/
let id: any = '52';

let id1 = id as number;
console.log(typeof id1); // string
// console.log(id1.length)  // error: Property 'length' does not exist on type 'number'
console.log(id1 * 6); // 312
console.log(id1 + 10); // 5210
console.log((id as number) + 10); // 5210
console.log(parseInt(id) + 10) //62 (because type of id is considered as any)
// console.log(parseInt(id1) + 10) //Argument of type 'number' is not assignable to parameter of type 'string'

let id2 = id as string;
console.log(typeof id2); // string
console.log(id2.length)


/*----------- type assertion and unknown ----------*/
let lang: unknown = "TypeScript";
console.log(typeof lang); // string
// console.log(lang.toUpperCase()); // Error - 'lang' is of type 'unknown'

let langStr = (lang as string).toUpperCase();
console.log(typeof lang); // string
console.log(langStr); // "TYPESCRIPT"

let sumStr: unknown = '234';
let sum = sumStr as number;
console.log(typeof sum); // string
// console.log(sum.length)  // error: Property 'length' does not exist on type 'number'
console.log('average = ' + sum / 4); //average = 58.5
console.log(sum + 10); // 23410
console.log((sumStr as number) + 10); // 23410
// console.log(parseInt(sumStr) + 10); // Argument of type 'unknown' is not assignable to parameter of type 'string'
// console.log(parseInt(sum) + 10) //Argument of type 'number' is not assignable to parameter of type 'string'


// We can't  do type assertion with type 'undefined' and 'null'


/*---- type assertion for convert JSON string to JS Object-------*/
interface Patient {
    name: string;
    age: number;
}
let jsonString = '{"name": "Chamod", "age": 24}';

let Patient1 = JSON.parse(jsonString) as Patient;

let Patient2: User = JSON.parse(jsonString);//without type assertion






/*------------------------------Union and Intersection-----------------------*/

/*------------- union (|) ------------*/
let index: string | number;

index = "hello";
index = 42;
// index = true; // Error - Type 'boolean' is not assignable to type 'string | number'.


/*----------- Intersection (&) ----------*/
type Driver = { name: string };
type Vehicle = { vehicleId: number };

type VehicleDriver = Driver & Vehicle;

const vd: VehicleDriver = {
    name: "Sanu",
    vehicleId: 123
};

console.log(vd);