import { JsonPipe } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, inject, OnInit } from '@angular/core';

@Component({
  selector: 'app-users',
  standalone: true,
  imports: [JsonPipe],
  templateUrl: './users.component.html',
  styleUrl: './users.component.css'
})
export class UsersComponent implements OnInit {

  httpClient = inject(HttpClient);

  private apiUrl = "https://jsonplaceholder.typicode.com/users/1";


  data: any;

  ngOnInit(): void {
    this.httpClient.get(this.apiUrl).subscribe(data => this.data = data);
  }

}
