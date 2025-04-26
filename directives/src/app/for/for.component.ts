import { NgFor, NgIf } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-for',
  standalone: true,
  imports: [NgFor,NgIf],
  templateUrl: './for.component.html',
  styleUrl: './for.component.css'
})
export class ForComponent {

  students: string[] = ['Amal', 'Kamal', 'Nimal', 'Wimal', 'Bimal'];

  users: User[] = [{ id: 1, name: 'user1', email: 'user1@gmail.com' },
                   { id: 2, name: 'user2', email: 'user2@gmail.com' },
                   { id: 3, name: 'user3', email: 'user3@gmail.com' }
                  ];

}

interface User {
  id: number;
  name: string;
  email: string;
}