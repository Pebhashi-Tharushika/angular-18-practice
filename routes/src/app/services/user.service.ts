import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private users:Array<User> = [
    { id: 1, name: 'Kamal' },
    { id: 2, name: 'John' },
    { id: 3, name: 'Doe' },
    { id: 4, name: 'Jane' },
    { id: 5, name: 'Smith' },
  ]

  constructor() { }

  getUserById(id:number):User | undefined {
    return this.users.find(user => user.id === id);
  }
  
  getAllUsers():Array<User> {
    return this.users;
  }
}

interface User{
  id: number;
  name: string;
}
