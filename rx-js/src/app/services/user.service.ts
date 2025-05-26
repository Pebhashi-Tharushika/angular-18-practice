import { EventEmitter, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  userAddedEvent =  new EventEmitter<boolean>();

  addUser(){
    this.userAddedEvent.emit(true);
  }

}
