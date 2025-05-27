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

  a = signal(0);

  constructor() {
    effect(() => {
      console.log('Effect triggered: count changed to', this.count());
      // this.a.set(2);
      // this.a.set(this.count() * 2);
    });
  }

  updatecount() {
    this.count.update(value => value + 1);
  }

}
