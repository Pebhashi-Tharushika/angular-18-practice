import { Component, contentChild, effect, ElementRef } from '@angular/core';
import { WidgetComponent } from '../widget/widget.component';

@Component({
  selector: 'app-content-queries',
  standalone: true,
  imports: [],
  templateUrl: './content-queries.component.html',
  styleUrl: './content-queries.component.css'
})
export class ContentQueriesComponent {

  h1 = contentChild<ElementRef>('h2');
  widget = contentChild(WidgetComponent);

  constructor() {
    effect(() => {
      console.log(this.h1());
      console.log(this.widget());
    });
  }

}
