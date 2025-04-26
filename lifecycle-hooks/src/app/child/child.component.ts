import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, DoCheck, ElementRef, Input, OnChanges, OnDestroy, OnInit, SimpleChanges, ViewChild } from '@angular/core';

@Component({
  selector: 'app-child',
  standalone: true,
  imports: [],
  templateUrl: './child.component.html',
  styleUrl: './child.component.css'
})

export class ChildComponent implements OnChanges, OnInit, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy {

  @Input() childName: string = ""; // pass parent component' value to hild component

  @ViewChild('paragraph') para !: ElementRef;

  counter: number = 0;

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
    console.log('Paragraph Text: ', this.para.nativeElement.textContent);
  }

  ngAfterViewChecked(): void {
    // console.log("AfterViewChecked is triggered: ");
    console.log("AfterViewChecked is triggered: ", this.counter);
  }

  ngOnDestroy(): void {
    console.log("OnDestroy is triggered: ");
  }

  incrementCounter() {
    this.counter++;
  }
}


