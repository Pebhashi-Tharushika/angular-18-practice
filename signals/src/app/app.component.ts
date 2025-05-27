import { Component } from '@angular/core';
import { CounterComponent } from './counter/counter.component';
import { EffectsComponent } from './effects/effects.component';
import { EqualityComponent } from './equality/equality.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CounterComponent, EffectsComponent, EqualityComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'signals';
}
