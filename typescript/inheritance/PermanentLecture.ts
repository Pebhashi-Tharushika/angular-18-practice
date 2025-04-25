import { Lecture } from './Lecture';

export class PermanentLecture extends Lecture {
    serviceYears: number;

    constructor(name: string, salary: number, department: string, serviceYears: number) {
        super(name, salary, department, false); // Calls the constructor of the parent class
        this.serviceYears = serviceYears;
    }
}