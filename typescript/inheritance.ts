/*------------------- parent class / super class ------------------*/
class Lecture {
    name: string;
    salary: number;
    department: string;
    isVisiting: boolean;

    constructor(name: string, salary: number, department: string, isVisiting: boolean) {
        this.name = name;
        this.salary = salary;
        this.department = department;
        this.isVisiting = isVisiting;
    }
}


/*------------------- child class / sub class ------------------*/
class PermanentLecture extends Lecture {
    serviceYears: number;

    constructor(name: string, salary: number, department: string, serviceYears: number) {
        super(name, salary, department, false); // Calls the constructor of the parent class
        this.serviceYears = serviceYears;
    }
}


/*------------------- child class / sub class ------------------*/
class VisitingLecture extends Lecture {
    workingHours: number;

    constructor(name: string, salary: number, department: string, workingHours: number) {
        super(name, salary, department, true); // Calls the constructor of the parent class
        this.workingHours = workingHours;
    }

}



/*------------------- create objects(instances) ------------------*/

let lec1 = new PermanentLecture('Ruwan', 170000, 'IT', 3);
console.log(lec1.name); // Ruwan
console.log(lec1.salary); // 170000
console.log(lec1.department); // IT
console.log(lec1.isVisiting); // false

console.log(lec1.serviceYears); // 3

console.log(lec1 instanceof PermanentLecture); // true
console.log(lec1 instanceof VisitingLecture); // false
console.log(lec1 instanceof Lecture); // true




let lec2 = new VisitingLecture('Nuwan', 100000, 'HR', 6);
console.log(lec2.name); // Nuwan
console.log(lec2.salary); // 100000
console.log(lec2.department); // HR
console.log(lec2.isVisiting); // true

console.log(lec2.workingHours); // 6

console.log(lec2 instanceof VisitingLecture); // true
console.log(lec2 instanceof PermanentLecture); // false
console.log(lec2 instanceof Lecture); // true




let lec3: Lecture = new PermanentLecture('Amal', 160000, 'ACC', 3);
console.log(lec3.name); // Amal
console.log(lec3.salary); // 160000
console.log(lec3.department); // ACC
console.log(lec3.isVisiting); // false

// console.log(lec3.serviceYears); // Property 'serviceYears' does not exist on type 'Lecture'
console.log((lec3 as PermanentLecture).serviceYears); // 3




let lec4: Lecture = new VisitingLecture('Kamal', 140000, 'ECON', 5);
console.log(lec4.name); // Kamal
console.log(lec4.salary); // 140000
console.log(lec4.department); // ECON
console.log(lec4.isVisiting); // true

// console.log(lec4.workingHours); // Property 'workingHours' does not exist on type 'Lecture'
console.log((lec4 as VisitingLecture).workingHours); // 5





// let lec5: PermanentLecture = new Lecture('Suwan', 180000, 'MED',false); // Error - Property 'serviceYears' is missing in type 'Lecture' but required in type 'PermanentLecture'.
// let lec6: VisitingLecture = new Lecture('Pawan', 150000, 'ENG',true); // Error - Property 'workingHours' is missing in type 'Lecture' but required in type 'VisitingLecture'





