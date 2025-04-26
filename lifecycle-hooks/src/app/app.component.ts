import { Component } from '@angular/core';
import { ChildComponent } from './child/child.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ChildComponent], // import ChildComponent
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent { // Parent Component Class
  title = 'lifecycle-hooks';

  parentName: string = "Amal";

  changeName(inputElement: HTMLInputElement) {
    this.parentName = inputElement.value;
  }
}
