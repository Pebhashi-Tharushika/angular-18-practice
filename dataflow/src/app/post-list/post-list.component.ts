import { Component } from '@angular/core';
import { PostListItemComponent } from '../post-list-item/post-list-item.component';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-post-list',
  standalone: true,
  imports: [PostListItemComponent, FormsModule], // import PostListItemComponent | import FormsModule to use [(ngModel)]
  templateUrl: './post-list.component.html',
  styleUrl: './post-list.component.css'
})
export class PostListComponent {

  postListTitle: string = "";

  posts: string[] = [];

  addNewPost(): void {
    this.posts.push(this.postListTitle);
  }

}
