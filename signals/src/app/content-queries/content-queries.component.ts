import { Component, contentChild, contentChildren, effect, ElementRef } from '@angular/core';
import { WidgetComponent } from '../widget/widget.component';

@Component({
  selector: 'app-content-queries',
  standalone: true,
  imports: [],
  templateUrl: './content-queries.component.html',
  styleUrl: './content-queries.component.css'
})
export class ContentQueriesComponent {

  // `h1` is a signal that holds a reference to a single projected HTML element from the parent template.
  h1 = contentChild<ElementRef>('h1');

  // `h2` is a signal that holds references to multiple projected HTML elements from the parent template.
  h2 = contentChildren<ElementRef>('h2');

  // `widget` is a signal that holds a reference to a projected another child component from the parent template.
  widget = contentChild(WidgetComponent);

  constructor() {
    effect(() => {
      console.log(this.h1());
      console.log(this.h2());
      console.log(this.widget());
    });
  }

}
