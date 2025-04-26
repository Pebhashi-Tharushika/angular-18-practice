import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-child',
  standalone: true,
  imports: [],
  templateUrl: './child.component.html',
  styleUrl: './child.component.css'
})
export class ChildComponent implements OnChanges, OnInit{

  @Input() childName:string = ""; // pass parent component' value to hild component

  ngOnChanges(changes: SimpleChanges): void {
    console.log("OnChanges is triggered: ");
    console.log(changes);
  }

  ngOnInit(): void {
    console.log("OnInit is triggered: ");
    console.log(this.childName);
  }
  
}
