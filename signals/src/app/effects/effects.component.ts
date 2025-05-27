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

  constructor(){
    effect(() => {
      console.log('Effect triggered: count changed to', this.count());
    });
  }

  updatecount(){
    this.count.update(value => value + 1);
  }

}
