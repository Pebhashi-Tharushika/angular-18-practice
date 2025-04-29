import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MyService {

  constructor() {
    console.log("MyService Constructor is called");
  }

  private message: string = "Hello World!";

  updateMessage(newMessage: string) {
    this.message = newMessage;
  }

  get getMessage() {
    return this.message
  }
}
