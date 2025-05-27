import { Component } from '@angular/core';
import { CounterComponent } from './counter/counter.component';
import { EffectsComponent } from './effects/effects.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CounterComponent, EffectsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'signals';
}
