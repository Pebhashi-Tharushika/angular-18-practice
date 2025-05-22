import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { interval } from 'rxjs';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
 
  title = 'rx-js';

  // Creates an Observable that emits sequential and incremental numbers every specified interval of time 
  ngOnInit(): void {
    interval(1000).subscribe((val) => {
      console.log(val);
    });
  }
}
