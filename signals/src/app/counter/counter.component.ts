import { Component, computed, Signal, signal, WritableSignal } from '@angular/core';

@Component({
  selector: 'app-counter',
  standalone: true,
  imports: [],
  templateUrl: './counter.component.html',
  styleUrl: './counter.component.css'
})
export class CounterComponent {
  // Using WritableSignal to allow both reading and writing
  counter : WritableSignal<number> = signal(0);

  // Using Signal to allow reading only
  counterDouble : Signal<number> = computed(()=>this.counter() * 2);

  setValue() {
    this.counter.set(10);
    // this.counterDouble.set(this.counter() * 2); //error: Signal is read-only
  }

  incrementValue() {
    this.counter.update(value => value + 1);
    // this.counterDouble.update(this.counter() * 2); // error: Signal is read-only
  }

  decrementValue() {
    this.counter.update(value => value - 1);
  }
}
