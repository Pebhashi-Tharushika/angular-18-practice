import { PermanentLecture } from './PermanentLecture';
import { VisitingLecture } from './VisitingLecture';
import { Lecture } from './Lecture';

let p1 = new PermanentLecture('Ruwan', 170000, 'IT', 3);
console.log(p1.name); // Ruwan
console.log(p1.salary); // 170000
console.log(p1.department); // IT
console.log(p1.isVisiting); // false

console.log(p1.serviceYears); // 3

console.log(p1 instanceof PermanentLecture); // true
console.log(p1 instanceof VisitingLecture); // false
console.log(p1 instanceof Lecture); // true




let v1 = new VisitingLecture('Nuwan', 100000, 'HR', 6);
console.log(v1.name); // Nuwan
console.log(v1.salary); // 100000
console.log(v1.department); // HR
console.log(v1.isVisiting); // true

console.log(v1.workingHours); // 6

console.log(v1 instanceof VisitingLecture); // true
console.log(v1 instanceof PermanentLecture); // false
console.log(v1 instanceof Lecture); // true




let p2: Lecture = new PermanentLecture('Amal', 160000, 'ACC', 3);
console.log(p2.name); // Amal
console.log(p2.salary); // 160000
console.log(p2.department); // ACC
console.log(p2.isVisiting); // false

// console.log(p2.serviceYears); // Property 'serviceYears' does not exist on type 'Lecture'
console.log((p2 as PermanentLecture).serviceYears); // 3




let v2: Lecture = new VisitingLecture('Kamal', 140000, 'ECON', 5);
console.log(v2.name); // Kamal
console.log(v2.salary); // 140000
console.log(v2.department); // ECON
console.log(v2.isVisiting); // true

// console.log(v2.workingHours); // Property 'workingHours' does not exist on type 'Lecture'
console.log((v2 as VisitingLecture).workingHours); // 5





// let p3: PermanentLecture = new Lecture('Suwan', 180000, 'MED',false); // Error - Property 'serviceYears' is missing in type 'Lecture' but required in type 'PermanentLecture'.
// let v3: VisitingLecture = new Lecture('Pawan', 150000, 'ENG',true); // Error - Property 'workingHours' is missing in type 'Lecture' but required in type 'VisitingLecture'


