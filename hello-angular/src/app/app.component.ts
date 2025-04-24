import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { NavbarComponent } from './navbar/navbar.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, LoginComponent, NavbarComponent], // import Login component and Navbar component
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'hello-angular';

  imgUrl: string = "https://logowik.com/content/uploads/images/angular-a-letter-new-20243216.logowik.com.webp";

  isDisabled:boolean = false;

  areaLabel: string = "Something is open";

  columnSpan:number = 2;

  fontColor: string = "Red";

  backgroundColor: string = "yellow";
}
