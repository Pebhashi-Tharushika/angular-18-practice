var message2 = "Hi, Kamal";
console.log(message2);
/*----------------------- how to define variable -------------------------*/
var grade; //declaration
grade = 6; //initialization
var count = 17;
/*-------------------------- data types ----------------------------*/
var country = "Japan";
var age = 20;
var weight = 63.25;
var isMarried = false;
/*----------------- let(new keyword) , var(old keyword) , const -----------------*/
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
/*---------------------- array Vs Array --------------------*/
var marks = [12, 34, 45]; // array
console.log(marks);
var marksArray = [12, 65, 89]; // Array interface
console.log(marksArray);
/*---------------------------- tuple --------------------------*/
var tuple1; // Declare a tuple type
tuple1 = ["Amal", 37, true]; // Assign values in correct order
console.log(tuple1);
/*-------------------------- function -------------------------*/
function greet(name) {
    return "hello ".concat(name, "!");
}
console.log(greet('Amal'));
function processUser(user) {
    return "Name: ".concat(user.name, ", Age: ").concat(user.age);
}
var user1 = {
    name: "Amal",
    age: 45
};
console.log(processUser(user1)); // Name: Amal, Age: 45
var emp = {
    name: "Sanu",
    age: 25,
    department: "Engineering"
};
console.log(emp.name); // Sanu
console.log(emp.age); // 25
console.log(emp.department); // Engineering
/*----------------------------- object vs Object in ts -------------------------------*/
/*----- object (represent primitives that are boxed and non-primitive types (objects)) -----*/
var obj = { name: "Alice", age: 30 }; // Valid
obj = [1, 2, 3]; // Valid
// obj = "hello"; //Error: Type 'string' is not assignable to type 'object' - b'coz string is primitive data type
/*----- Object -----*/
var obj2 = { name: "Alice" }; // Valid
obj2 = 10; // Valid, because Number(10) is an object
obj2 = "hello"; // Valid, because String("hello") is an object
function displayStudentInfo(user) {
    return "Name: ".concat(user.name, ", Age: ").concat(user.age);
}
var student = {
    name: "Saman"
};
console.log(displayStudentInfo(student)); // Name: Saman, Age: undefined
/* ? with function parameers */
function showPersonelInfo(name, age) {
    console.log(name);
    console.log(age);
}
showPersonelInfo("Amal");
//Amal
//undefined
/*-------------------------------- enum ------------------------------*/
var Direction;
(function (Direction) {
    Direction[Direction["North"] = 0] = "North";
    Direction[Direction["East"] = 1] = "East";
    Direction[Direction["South"] = 2] = "South";
    Direction[Direction["West"] = 3] = "West";
})(Direction || (Direction = {}));
var dir = Direction.North;
console.log(dir); // 0
/* enum  with custom values */
var colors;
(function (colors) {
    colors[colors["RED"] = 100] = "RED";
    colors[colors["GREEN"] = 200] = "GREEN";
    colors[colors["BLUE"] = 300] = "BLUE";
    colors[colors["WHITE"] = 400] = "WHITE";
})(colors || (colors = {}));
console.log(colors.BLUE); // 100
var myName = "Amal"; // same as:- let name: string
var owner1 = {
    name: "Sanu",
    age: 28,
};
var greetUser = function (name) { return "Hello ".concat(name, "!"); };
var greetCustomer = function (customerName) { return "Welcome ".concat(customerName); };
console.log(greetUser("Amal"));
console.log(greetCustomer('Kamal'));
var displayResult = function () { console.log('display something'); };
var displayAverageMarks = function () {
    var avg = (45 + 59 + 75) / 3;
    console.log("average marks: " + Math.round(avg * 100) / 100);
};
displayResult();
displayAverageMarks();
var coordinate = [14, 27];
console.log(coordinate);
var currentStatus = "loading";
currentStatus = "error";
var item1 = {
    name: "Fresh Milk",
    code: 34,
    isExpired: false
};
console.log(item1); //{ name: 'Fresh Milk', code: 34, isExpired: false }
/*-------------------------------- any ------------------------------*/
var a;
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
var b;
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
var x;
console.log(x); // undefined
console.log(typeof x); // undefined
var y = 22;
console.log(y); // 22
console.log(typeof y); // number
var z = undefined;
console.log(z); // undefined
console.log(typeof z); // undefined
var c;
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
var d = undefined;
// d = 10; // Error - Type '10' is not assignable to type 'undefined'
// d = {};
// d = null;
d = undefined;
/*------------------------------ null -------------------------*/
var p = null;
var q = 6;
q = null;
q = 57;
var r = null;
console.log('r: ' + r + ' - ' + typeof r); // r: null - object
var s = null;
console.log('s: ' + s + ' - ' + typeof s); // s: null - object
var t = "saved";
// t = null; //Error - Type 'null' is not assignable to type 'string'.
var u = ["abc", "def", "ghi"];
console.log(typeof u); //object
// u = null; // Error - Type 'null' is not assignable to type 'string[]'
var v = null;
//  v = "success"; // Error - Type '"success"' is not assignable to type 'null'.
var e;
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
var value = "Hello World";
var strLength2 = value.length; // 'as' syntax (recommended)
var strLength1 = value.length; // Angle-bracket syntax
/*----------- type assertion and any ----------*/
var id = '52';
var id1 = id;
console.log(typeof id1); // string
// console.log(id1.length)  // error: Property 'length' does not exist on type 'number'
console.log(id1 * 6); // 312
console.log(id1 + 10); // 5210
console.log(id + 10); // 5210
console.log(parseInt(id) + 10); //62 (because type of id is considered as any)
// console.log(parseInt(id1) + 10) //Argument of type 'number' is not assignable to parameter of type 'string'
var id2 = id;
console.log(typeof id2); // string
console.log(id2.length);
/*----------- type assertion and unknown ----------*/
var lang = "TypeScript";
console.log(typeof lang); // string
// console.log(lang.toUpperCase()); // Error - 'lang' is of type 'unknown'
var langStr = lang.toUpperCase();
console.log(typeof lang); // string
console.log(langStr); // "TYPESCRIPT"
var sumStr = '234';
var sum = sumStr;
console.log(typeof sum); // string
// console.log(sum.length)  // error: Property 'length' does not exist on type 'number'
console.log('average = ' + sum / 4); //average = 58.5
console.log(sum + 10); // 5210
console.log(sumStr + 10); // 5210
var jsonString = '{"name": "Chamod", "age": 24}';
var Patient1 = JSON.parse(jsonString);
var Patient2 = JSON.parse(jsonString); //without type assertion
