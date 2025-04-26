import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-post-list-item',
  standalone: true,
  imports: [],
  templateUrl: './post-list-item.component.html',
  styleUrl: './post-list-item.component.css'
})
export class PostListItemComponent {

  // @Input() postListItemTitle:string = "";

  /* If there is any change in names, use alias of @Input() decotator */
  // @Input('postListItemTitle') itemTitle: string = "";

  @Input('postListItemTitle') itemTitle: string = "";
}
