import { HttpClient, HttpParams } from '@angular/common/http';
import { Component, inject, OnInit } from '@angular/core';

@Component({
  selector: 'app-query-param',
  standalone: true,
  imports: [],
  templateUrl: './query-param.component.html',
  styleUrl: './query-param.component.css'
})
export class QueryParamComponent implements OnInit {

  httpClient = inject(HttpClient);

  ngOnInit(): void {

    // let params = { userId: '1', id: '1' };

    // this.httpClient.get('https://jsonplaceholder.typicode.com/posts', { params: params }).subscribe(data => {
    //   console.log(data);
    // });

    const httpParams = new HttpParams();
    let params = httpParams.set('userId', '1').set('id', '1');
    
    this.httpClient.get('https://jsonplaceholder.typicode.com/posts', { params }).subscribe(data => {
      console.log(data);
    });

  }
}
