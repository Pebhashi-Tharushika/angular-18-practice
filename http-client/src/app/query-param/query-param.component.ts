import { HttpClient, HttpParams } from '@angular/common/http';
import { Component, inject, OnInit } from '@angular/core';
import { CustomHttpQueryParameterCodecService } from '../services/custom-http-query-parameter-codec.service';

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

    const httpParams = new HttpParams({ encoder: new CustomHttpQueryParameterCodecService() });
    let params = httpParams.set('user Id', '1').set('id', '1 5');

    this.httpClient.get('https://jsonplaceholder.typicode.com/posts', { params }).subscribe(data => {
      console.log(data);
    });

  }
}
