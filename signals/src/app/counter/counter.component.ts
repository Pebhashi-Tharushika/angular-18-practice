import { Component, signal, WritableSignal } from '@angular/core';

@Component({
  selector: 'app-counter',
  standalone: true,
  imports: [],
  templateUrl: './counter.component.html',
  styleUrl: './counter.component.css'
})
export class CounterComponent {
  counter : WritableSignal<number> = signal(0);

  setValue() {
    this.counter.set(10);
  }

  incrementValue() {
    this.counter.update(value => value + 1);
  }

  decrementValue() {
    this.counter.update(value => value - 1);
  }
}
