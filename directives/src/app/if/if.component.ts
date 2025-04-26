import { NgIf } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-if',
  standalone: true,
  imports: [NgIf],
  templateUrl: './if.component.html',
  styleUrl: './if.component.css'
})
export class IfComponent {
  title = 'directives';

  name: string = "Chamod";

  isLoggedIn: boolean = true;

  status: string = 'failed';

  marks: number = 70;

  role: string = 'admin';//editor, user, admin

  isContentVisible: boolean = true;

  toggleButton() {
    this.isContentVisible = !this.isContentVisible
  }
}
