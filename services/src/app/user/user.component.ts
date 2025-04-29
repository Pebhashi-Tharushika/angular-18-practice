import { Component } from '@angular/core';
import { MyService } from '../services/my-service.service'; //import MyService

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
  message: string = '';

  myService: MyService

  constructor() {
    this.myService = new MyService();
    this.message = this.myService.getMessage;
  }

  updateMessage(){
    this.message = this.myService.getMessage;
  }
}
