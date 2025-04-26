import { AfterContentChecked, AfterContentInit, AfterViewInit, Component, DoCheck, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-child',
  standalone: true,
  imports: [],
  templateUrl: './child.component.html',
  styleUrl: './child.component.css'
})

export class ChildComponent implements OnChanges, OnInit, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit {

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

  ngAfterContentChecked(): void {
    console.log("AfterContentChecked is triggered: ");
  }

  ngAfterViewInit(): void {
    console.log("AfterViewInit is triggered: ");
  }

  // incrementCounter() {
  //   this.counter++;
  // }
}


