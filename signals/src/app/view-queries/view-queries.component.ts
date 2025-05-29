import { Component, effect, signal, viewChild } from '@angular/core';

@Component({
  selector: 'app-view-queries',
  standalone: true,
  imports: [],
  templateUrl: './view-queries.component.html',
  styleUrl: './view-queries.component.css'
})
export class ViewQueriesComponent {

  age = 35;

  requiredElement = viewChild.required('requiredElement');

  optionalElement = viewChild('optionalElement');

  showOptionalElement = signal(false);

  constructor() {
    effect(() => {
      console.log(this.requiredElement());
      console.log(this.optionalElement());
    });
  }

  toggle() {
    this.showOptionalElement.update(value => !value);
  }

}
