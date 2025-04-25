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
var a = "Saman";
a = 26;
console.log('a: ' + a);
a = true;
console.log('a: ' + a);
a = "Japan";
console.log('a: ' + a);
a = 5.3;
console.log('a: ' + a);
/*-------------------------- type assertion ------------------------------*/
var value = "Hello World";
var strLength2 = value.length; // 'as' syntax (recommended)
var strLength1 = value.length; // Angle-bracket syntax
var id = '52';
var id1 = id;
console.log(typeof id1); // string
// console.log(id1.length)  // error: Property 'length' does not exist on type 'number'
var id2 = id;
console.log(typeof id2); // string
console.log(id2.length);
/*----------------------- undefined -----------------------*/
var x;
console.log(x); // undefined
console.log(typeof x); // undefined
var y = 22;
console.log(y); // 22
console.log(typeof y); // number
var z = undefined;
console.log(z); // undefined
console.log(typeof z); // undefined
