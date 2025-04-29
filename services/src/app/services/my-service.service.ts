import { Injectable } from '@angular/core';
import { LoggingService } from './logging.service';

@Injectable({
  providedIn: 'root'
})
export class MyService {

  constructor(private loggingService: LoggingService) {
    console.log("MyService Constructor is called");
  }

  private message: string = "Hello World!";

  updateMessage(newMessage: string) {
    this.message = newMessage;
    this.loggingService.logData("Message Updated: " + this.message);
  }

  get getMessage() {
    return this.message
  }
}
