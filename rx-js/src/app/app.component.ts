import { Component, inject, OnInit } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { UserService } from './services/user.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink, RouterLinkActive],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  title = 'rx-js';

  isUserAdded: boolean = false;

  userService = inject(UserService);

  ngOnInit(): void {
    this.userService.userAddedEvent.subscribe((isAdded: boolean) => {
      this.isUserAdded = isAdded;
    });
  }
}
