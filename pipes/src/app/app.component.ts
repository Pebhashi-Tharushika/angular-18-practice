import { CurrencyPipe, DatePipe, DecimalPipe, JsonPipe, LowerCasePipe, PercentPipe, SlicePipe, TitleCasePipe, UpperCasePipe } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [UpperCasePipe, LowerCasePipe, TitleCasePipe, DecimalPipe, CurrencyPipe, PercentPipe, DatePipe, JsonPipe, SlicePipe],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'pipes';

  tax: number = 0.3261;

  today : number = Date.now();

}

interface User {
  name: string;
  age: number;
}