import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
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
    // let headers = { 'x-custom-header': 'my-custom-header' };
    // this.httpClient.get('https://jsonplaceholder.typicode.com/posts', { params: params, headers: headers }).subscribe(data => {
    //   console.log(data);
    // });

    const httpParams = new HttpParams({ encoder: new CustomHttpQueryParameterCodecService() });
    let params = httpParams.set('user Id', '1').set('id', '1 5');

    const httpHeaders = new HttpHeaders();
    let headers = httpHeaders.set('x-custom-header', 'my-custom-header');
    this.httpClient.get('https://jsonplaceholder.typicode.com/posts', { params, headers }).subscribe(data => {
      console.log(data);
    });

    // this.decodeExample();

  }

  decodeExample() {
    const encodedKey = 'user+Id';
    const encodedValue = '1+5';
    let CustomHttpQueryParameterCodec = new CustomHttpQueryParameterCodecService();
    const decodedKey = CustomHttpQueryParameterCodec.decodeKey(encodedKey);
    const decodedValue = CustomHttpQueryParameterCodec.decodeValue(encodedValue);
    console.log('Decoded Key:', decodedKey); // Output: user Id
    console.log('Decoded Value:', decodedValue); // Output: 1 5
  }
}
