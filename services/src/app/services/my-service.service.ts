import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MyService {

  constructor() {
    console.log("MyService Constructor is called");
  }

  message: string = "Hello World!";

}
