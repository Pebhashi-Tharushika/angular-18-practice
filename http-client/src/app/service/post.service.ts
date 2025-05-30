import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  private apiUrl = "https://jsonplaceholder.typicode.com/posts";

  constructor(private httpClient: HttpClient) { }

  // return type: Observable<Post[]>
  getPosts() {
    return this.httpClient.get<Post[]>(this.apiUrl);
  }
}

interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}
