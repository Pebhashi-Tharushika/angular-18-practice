export class Lecture {
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