var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
/*------------------- parent class / super class ------------------*/
var Lecture = /** @class */ (function () {
    function Lecture(name, salary, department, isVisiting) {
        this.name = name;
        this.salary = salary;
        this.department = department;
        this.isVisiting = isVisiting;
    }
    return Lecture;
}());
/*------------------- child class / sub class ------------------*/
var PermanentLecture = /** @class */ (function (_super) {
    __extends(PermanentLecture, _super);
    function PermanentLecture(name, salary, department, serviceYears) {
        var _this = _super.call(this, name, salary, department, false) || this; // Calls the constructor of the parent class
        _this.serviceYears = serviceYears;
        return _this;
    }
    return PermanentLecture;
}(Lecture));
/*------------------- child class / sub class ------------------*/
var VisitingLecture = /** @class */ (function (_super) {
    __extends(VisitingLecture, _super);
    function VisitingLecture(name, salary, department, workingHours) {
        var _this = _super.call(this, name, salary, department, true) || this; // Calls the constructor of the parent class
        _this.workingHours = workingHours;
        return _this;
    }
    return VisitingLecture;
}(Lecture));
/*------------------- create objects(instances) ------------------*/
var lec1 = new PermanentLecture('Ruwan', 170000, 'IT', 3);
console.log(lec1.name); // Ruwan
console.log(lec1.salary); // 170000
console.log(lec1.department); // IT
console.log(lec1.isVisiting); // false
console.log(lec1.serviceYears); // 3
console.log(lec1 instanceof PermanentLecture); // true
console.log(lec1 instanceof VisitingLecture); // false
console.log(lec1 instanceof Lecture); // true
var lec2 = new VisitingLecture('Nuwan', 100000, 'HR', 6);
console.log(lec2.name); // Nuwan
console.log(lec2.salary); // 100000
console.log(lec2.department); // HR
console.log(lec2.isVisiting); // true
console.log(lec2.workingHours); // 6
console.log(lec2 instanceof VisitingLecture); // true
console.log(lec2 instanceof PermanentLecture); // false
console.log(lec2 instanceof Lecture); // true
var lec3 = new PermanentLecture('Amal', 160000, 'ACC', 3);
console.log(lec3.name); // Amal
console.log(lec3.salary); // 160000
console.log(lec3.department); // ACC
console.log(lec3.isVisiting); // false
// console.log(lec3.serviceYears); // Property 'serviceYears' does not exist on type 'Lecture'
console.log(lec3.serviceYears); // 3
var lec4 = new VisitingLecture('Kamal', 140000, 'ECON', 5);
console.log(lec4.name); // Kamal
console.log(lec4.salary); // 140000
console.log(lec4.department); // ECON
console.log(lec4.isVisiting); // true
// console.log(lec4.workingHours); // Property 'workingHours' does not exist on type 'Lecture'
console.log(lec4.workingHours); // 5
// let lec5: PermanentLecture = new Lecture('Suwan', 180000, 'MED',false); // Error - Property 'serviceYears' is missing in type 'Lecture' but required in type 'PermanentLecture'.
// let lec6: VisitingLecture = new Lecture('Pawan', 150000, 'ENG',true); // Error - Property 'workingHours' is missing in type 'Lecture' but required in type 'VisitingLecture'
