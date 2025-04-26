import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { PostListComponent } from './post-list/post-list.component';
import { UserComponent } from './user/user.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [PostListComponent, /*UserComponent*/], // import PostListComponent
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent /*implements AfterViewInit*/ { // implement by one of the component lifecycle hook and import it
  title = 'dataflow';

  // @ViewChild(UserComponent) userComponent!: UserComponent; // ! - non-null assertion operator

  // message: string = "";

  // constructor() {
  //   console.log(this.userComponent); //undefined
  // }

  //runs once after component's view and child views are initialized
  // ngAfterViewInit(): void {
  //   console.log(this.userComponent); // UserComponent object
  //   this.message = this.userComponent.userMessage;
  // }

  // handleDataFromChild(message: string) {
  //   console.log(message);
  //   this.message = message;
  // }
}
