import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'td-forms';

  onSubmit(event: any) {
    event.preventDefault();
    console.group("Form submitted");
    console.log(event);
    console.log(event.target[0].value);
    console.log(event.target[1].value);
    console.log(event.target[2].value);
  }
}
