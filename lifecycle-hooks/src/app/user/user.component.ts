import { AfterViewInit, Component } from '@angular/core';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent implements AfterViewInit{
  ngAfterViewInit(): void {
    console.log("AfterViewInit is triggered: ");
  }

}
