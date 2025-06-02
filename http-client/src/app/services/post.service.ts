import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  private apiUrl = "https://jsonplaceholder.typicode.com/posts";

  constructor(private httpClient: HttpClient) { }

  getPosts(): Observable<Post[]> {
    return this.httpClient.get<Post[]>(this.apiUrl);
  }
}

interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}
