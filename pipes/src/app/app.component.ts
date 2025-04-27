import { CurrencyPipe, DatePipe, DecimalPipe, JsonPipe, LowerCasePipe, PercentPipe, SlicePipe, TitleCasePipe, UpperCasePipe } from '@angular/common';
import { Component } from '@angular/core';
import { ShortenPipe } from './pipes/shorten.pipe';
import { SearchFilterPipe } from './pipes/search-filter.pipe';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [UpperCasePipe, LowerCasePipe, TitleCasePipe, DecimalPipe, CurrencyPipe, PercentPipe, DatePipe, JsonPipe, SlicePipe, ShortenPipe, SearchFilterPipe, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'pipes';

  tax: number = 0.3261;

  today: number = Date.now();

  birthday: Date = new Date('05/15/1988'); // 'MM/dd/yyyy' or 'yyyy-MM-dd'

  user: User = {
    name: 'Nimal Gamage',
    age: 47
  }

  greeting: string = "Hello Angular World";

  arr: number[] = [10, 20, 30, 40, 50];

  startDate: Date = new Date(1880, 7, 19);

  names: string[] = ["Nimal", "Sunil", "Kamal", "Siril"]

  searchText: string = ""

  addUser() {
    this.names.push("Nimal")
  }

}

interface User {
  name: string;
  age: number;
}