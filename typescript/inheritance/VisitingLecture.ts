import { Lecture } from './Lecture';

export class VisitingLecture extends Lecture {
    workingHours: number;

    constructor(name: string, salary: number, department: string, workingHours: number) {
        super(name, salary, department, true); // Calls the constructor of the parent class
        this.workingHours = workingHours;
    }

}