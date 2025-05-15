import { Component, OnInit } from '@angular/core';
import { IDeactivateGuard } from '../services/guards/deactivate-guard.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-first',
  standalone: true,
  imports: [],
  templateUrl: './first.component.html',
  styleUrl: './first.component.css'
})
export class FirstComponent implements IDeactivateGuard, OnInit {

  constructor(private activateRoute: ActivatedRoute) { }

  // This method is used to get data from the route via resolve
  ngOnInit(): void {
    this.activateRoute.data.subscribe((data) => {
      console.log("resolve: ",data);
    });
  }

  // This method is used to check if the user can leave the page
  // It is used in the canDeactivate guard
  canDeactivate(): boolean {
    return confirm('Are you sure you want to leave this page?');
  }

}
