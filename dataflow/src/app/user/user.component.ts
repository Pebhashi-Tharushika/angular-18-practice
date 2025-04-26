import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {

  userMessage: string = "This is child message";

  userName: string = "Amal";

  private salary: number = 25000;

  protected age: number = 13;

  @Output() dataEmitter = new EventEmitter<string>();// This is an event

  sendData() {
    this.dataEmitter.emit(this.userMessage); // publish userMessage to this dataEmitter event
  }

}
