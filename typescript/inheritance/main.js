"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var PermanentLecture_1 = require("./PermanentLecture");
var VisitingLecture_1 = require("./VisitingLecture");
var Lecture_1 = require("./Lecture");
var p1 = new PermanentLecture_1.PermanentLecture('Ruwan', 170000, 'IT', 3);
console.log(p1.name); // Ruwan
console.log(p1.salary); // 170000
console.log(p1.department); // IT
console.log(p1.isVisiting); // false
console.log(p1.serviceYears); // 3
console.log(p1 instanceof PermanentLecture_1.PermanentLecture); // true
console.log(p1 instanceof VisitingLecture_1.VisitingLecture); // false
console.log(p1 instanceof Lecture_1.Lecture); // true
var v1 = new VisitingLecture_1.VisitingLecture('Nuwan', 100000, 'HR', 6);
console.log(v1.name); // Nuwan
console.log(v1.salary); // 100000
console.log(v1.department); // HR
console.log(v1.isVisiting); // true
console.log(v1.workingHours); // 6
console.log(v1 instanceof VisitingLecture_1.VisitingLecture); // true
console.log(v1 instanceof PermanentLecture_1.PermanentLecture); // false
console.log(v1 instanceof Lecture_1.Lecture); // true
var p2 = new PermanentLecture_1.PermanentLecture('Amal', 160000, 'ACC', 3);
console.log(p2.name); // Amal
console.log(p2.salary); // 160000
console.log(p2.department); // ACC
console.log(p2.isVisiting); // false
// console.log(p2.serviceYears); // Property 'serviceYears' does not exist on type 'Lecture'
console.log(p2.serviceYears); // 3
var v2 = new VisitingLecture_1.VisitingLecture('Kamal', 140000, 'ECON', 5);
console.log(v2.name); // Kamal
console.log(v2.salary); // 140000
console.log(v2.department); // ECON
console.log(v2.isVisiting); // true
// console.log(v2.workingHours); // Property 'workingHours' does not exist on type 'Lecture'
console.log(v2.workingHours); // 5
// let p3: PermanentLecture = new Lecture('Suwan', 180000, 'MED',false); // Error - Property 'serviceYears' is missing in type 'Lecture' but required in type 'PermanentLecture'.
// let v3: VisitingLecture = new Lecture('Pawan', 150000, 'ENG',true); // Error - Property 'workingHours' is missing in type 'Lecture' but required in type 'VisitingLecture'
