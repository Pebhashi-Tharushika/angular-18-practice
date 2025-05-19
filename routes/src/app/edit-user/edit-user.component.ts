import { Component, Input } from '@angular/core';
import { JsonPipe } from '@angular/common';

@Component({
  selector: 'app-edit-user',
  standalone: true,
  imports: [JsonPipe],
  templateUrl: './edit-user.component.html',
  styleUrl: './edit-user.component.css'
})
export class EditUserComponent {

  userId !: number;
  
  // setter method to set the id that comes from the route
  @Input() set id(id: string) {
    console.log(id);
    this.userId = +id;
  }

}
