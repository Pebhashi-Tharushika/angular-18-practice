import { Component, inject, OnDestroy, OnInit } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { UserService } from './services/user.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink, RouterLinkActive],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'rx-js';

  isUserAdded: boolean = false;

  userService = inject(UserService);

  userAddedSubscription: any;

  ngOnInit(): void {
    this.userAddedSubscription = this.userService.userAddedSubject.subscribe((isAdded: boolean) => {
      this.isUserAdded = isAdded;
    });
  }

  ngOnDestroy(): void {
    this.userAddedSubscription.unsubscribe();
  }
}
