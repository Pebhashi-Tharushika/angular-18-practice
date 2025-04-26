import { AfterViewInit, Component, ViewChild, ViewContainerRef } from '@angular/core';
import { ChildComponent } from './child/child.component';
import { UserComponent } from './user/user.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ChildComponent, /*UserComponent*/],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements AfterViewInit { // Parent Component Class
  title = 'lifecycle-hooks';

  @ViewChild(ChildComponent) childComponent!: ChildComponent;

  message: string = '';

  constructor() {
    console.log(this.childComponent); //undefined
  }

  // runs once after component view and child view are initialized
  ngAfterViewInit(): void {
    console.log("AfterViewInit is triggered: ");
    console.log(this.childComponent); // ChildComponent object 
  }

  // constructor(private viewContainer: ViewContainerRef) {}

  // addCmponent() {
  //   this.viewContainer.createComponent(UserComponent);
  // }

  // parentName: string = "Amal";

  // changeName(inputElement: HTMLInputElement) {
  //   this.parentName = inputElement.value;
  // }
}
