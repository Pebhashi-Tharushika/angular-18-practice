import { Component, effect, signal } from '@angular/core';

@Component({
  selector: 'app-effects',
  standalone: true,
  imports: [],
  templateUrl: './effects.component.html',
  styleUrl: './effects.component.css'
})
export class EffectsComponent {

  count = signal(0);

  constructor() {
    // listen to a signal
    effect(() => {
      console.log('effect executed');
      // console.log('Effect triggered: count changed to', this.count());
      this.count.set(this.count() + 1);
    });
  }

  updatecount() {
    this.count.update(value => value + 1);
  }

}
