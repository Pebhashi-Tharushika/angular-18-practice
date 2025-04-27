import { Component, ViewContainerRef } from '@angular/core';
import { UserComponent } from './user/user.component';
import { NgComponentOutlet } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [UserComponent, NgComponentOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'dynamically-manipulate-component';

  constructor(private viewContainerRef: ViewContainerRef){}

  addComponent(){
    this.viewContainerRef.createComponent(UserComponent);
  }

  // loadUserComponent() {
  //   return UserComponent;
  // }
}
