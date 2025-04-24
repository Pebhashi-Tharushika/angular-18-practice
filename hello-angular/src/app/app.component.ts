import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, LoginComponent, NavbarComponent, FormsModule], // import FormsModule to use [(ngModel)]
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'hello-angular';

  imgUrl: string = "https://logowik.com/content/uploads/images/angular-a-letter-new-20243216.logowik.com.webp";

  isDisabled: boolean = false;

  areaLabel: string = "Something is open";

  columnSpan: number = 2;

  fontColor: string = "Red";

  backgroundColor: string = "yellow";

  isActive: boolean = false;

  name: string = "Amal";

  username: string = "username";

  country: string = '';

  buttonClick() {
    console.log("clicked");
  }

  // access event arguments
  downKey($event: KeyboardEvent) {
    console.log("key down");
    console.log($event);
    console.log($event.key); // e | Enter | 2
    console.log($event.code); // KeyE | Enter | Digit2
  }

  updateName(event: KeyboardEvent) {
    if (event.key === "Enter") {
      console.log("User press enter key in the text input field.");
    }
  }

  pressEnter() {
    console.log("User press enter key in the text input field.");
  }

  displayUsername(inputElement: HTMLInputElement) {
    this.username = inputElement.value ? inputElement.value : "username";
  }
}
