import { Component, inject, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-third',
  standalone: true,
  imports: [],
  templateUrl: './third.component.html',
  styleUrl: './third.component.css'
})
export class ThirdComponent implements OnInit {

  title=inject(Title);

  constructor(private activateRoute:ActivatedRoute){}

  ngOnInit(): void {
    // Imagine that we gets the title from the server
      this.title.setTitle('Third Title');

    // first way to get data from route
    console.log(this.activateRoute.snapshot.data);

    // second way to get data from route
    this.activateRoute.data.subscribe((data) => {
      console.log(data);
    });
  }

}
