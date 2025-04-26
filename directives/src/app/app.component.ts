import { NgIf } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [NgIf],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'directives';

  name: string = "Chamod";

  isLoggedIn: boolean = true;

  status: string = 'success';

  marks: number = 70;

  role: string = 'admin';//editor, user, admin

}
