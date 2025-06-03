import { Component } from '@angular/core';
import { PostListComponent } from "./post-list/post-list.component";
import { RouterOutlet } from '@angular/router';
import { DataFetcherComponent } from "./data-fetcher/data-fetcher.component";
import { QueryParamComponent } from "./query-param/query-param.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [PostListComponent, RouterOutlet, DataFetcherComponent, QueryParamComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'http-client';
}
