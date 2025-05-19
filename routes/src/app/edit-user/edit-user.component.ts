import { Component, inject, Input } from '@angular/core';
import { UserService } from '../services/user.service';
import { JsonPipe } from '@angular/common';

@Component({
  selector: 'app-edit-user',
  standalone: true,
  imports: [JsonPipe],
  templateUrl: './edit-user.component.html',
  styleUrl: './edit-user.component.css'
})
export class EditUserComponent {

  userService = inject(UserService);

  user: any;

  // setter method to set the id that comes from the route
  @Input() set id(id: string) {
    console.log('set id ', id);
    this.user = this.userService.getUserById(+id);
  }

}
