<<<<<<< HEAD
import { AfterContentChecked, AfterContentInit, Component, DoCheck, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
=======
import { AfterContentInit, Component, DoCheck, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
>>>>>>> 3173189e340b806564565a8191a64ecec1fa3d4a

@Component({
  selector: 'app-child',
  standalone: true,
  imports: [],
  templateUrl: './child.component.html',
  styleUrl: './child.component.css'
})
<<<<<<< HEAD
export class ChildComponent implements OnChanges, OnInit, DoCheck, AfterContentInit, AfterContentChecked {
=======
export class ChildComponent implements OnChanges, OnInit, DoCheck, AfterContentInit {
>>>>>>> 3173189e340b806564565a8191a64ecec1fa3d4a

  @Input() childName: string = ""; // pass parent component' value to hild component

  // counter: number = 0;

  constructor() {
    console.log("Constructor is triggered");
    console.log(this.childName);
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log("OnChanges is triggered: ");
    console.log(changes);
  }

  ngOnInit(): void {
    console.log("OnInit is triggered: ");
    console.log(this.childName);
  }

  ngDoCheck(): void {
    console.log("DoCheck is triggered: ");
  }

  ngAfterContentInit(): void {
    console.log("AfterContentInit is triggered: ");
  }

<<<<<<< HEAD
  ngAfterContentChecked(): void {
    console.log("AfterContentChecked is triggered: ");
  }

=======
>>>>>>> 3173189e340b806564565a8191a64ecec1fa3d4a
  // incrementCounter() {
  //   this.counter++;
  // }
}


