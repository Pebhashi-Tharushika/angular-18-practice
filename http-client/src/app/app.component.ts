import { Component } from '@angular/core';
import { PostListComponent } from "./post-list/post-list.component";
import { RouterOutlet } from '@angular/router';
import { DataFetcherComponent } from "./data-fetcher/data-fetcher.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [PostListComponent, RouterOutlet, DataFetcherComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'http-client';
}
