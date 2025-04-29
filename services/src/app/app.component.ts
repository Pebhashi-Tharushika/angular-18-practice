import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { UserComponent } from './user/user.component';
import { PostComponent } from './post/post.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [UserComponent, PostComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements AfterViewInit{
  
  title = 'services';

  message :string = '';

  @ViewChild(UserComponent) userComponent!: UserComponent;

  ngAfterViewInit(): void {
    this.message = this.userComponent.message;
  }
}
