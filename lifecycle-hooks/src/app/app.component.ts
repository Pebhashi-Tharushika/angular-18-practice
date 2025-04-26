import { Component, ViewContainerRef } from '@angular/core';
import { ChildComponent } from './child/child.component';
import { UserComponent } from './user/user.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ChildComponent,UserComponent], 
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent { // Parent Component Class
  title = 'lifecycle-hooks';

  constructor(private viewContainer: ViewContainerRef){}

  loadChildComponent(){
    return ChildComponent;
  }

  addCmponent(){
    this.viewContainer.createComponent(ChildComponent);
  }

  removeComponent(){
    this.viewContainer.remove();
  }

  // addCmponent(){
  //   this.viewContainer.createComponent(UserComponent);
  // }

  parentName: string = "Amal";

  changeName(inputElement: HTMLInputElement) {
    this.parentName = inputElement.value;
  }
}
