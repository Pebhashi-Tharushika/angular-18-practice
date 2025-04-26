import { Component, Input } from '@angular/core';
import { PostListItemComponent } from '../post-list-item/post-list-item.component';
import { FormsModule } from '@angular/forms';
import { AddPostComponent } from '../add-post/add-post.component';

@Component({
  selector: 'app-post-list',
  standalone: true,
  imports: [PostListItemComponent, /*FormsModule,*/ AddPostComponent], // import AddPostComponent
  templateUrl: './post-list.component.html',
  styleUrl: './post-list.component.css'
})
export class PostListComponent {

  // postListTitle: string = "";

  posts: string[] = [];

  // addNewPost(): void {
  //   this.posts.push(this.postListTitle);
  // }

  addNewPostFromChild(postListTitle: string) {
    this.posts.push(postListTitle);
  }

}
