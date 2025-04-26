import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-child',
  standalone: true,
  imports: [],
  templateUrl: './child.component.html',
  styleUrl: './child.component.css'
})
export class ChildComponent implements OnChanges{

  @Input() childName:string = ""; // pass parent component' value to hild component

  ngOnChanges(changes: SimpleChanges): void {
    console.log("OnChanges is triggered: ");
    console.log(changes);
  }

}
