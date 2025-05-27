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
  counter: WritableSignal<number> = signal(0);

  numbers: WritableSignal<number[]> = signal([1, 2, 3, 4, 5, 6, 7, 8, 9]);

  oddNumbers: Signal<number[]> = computed(() => {
    console.log('Computed Odd Numbers');
    return this.numbers().filter(num => num % 2 !== 0)
  });

  // Using Signal to allow reading only
  doubleCounter: Signal<number> = computed(() => {
    console.log('Computed Signal');
    return this.counter() * 2;
  });

  setValue() {
    this.counter.set(10);
    // this.doubleCounter.set(this.counter() * 2); //error: Signal is read-only
  }

  incrementValue() {
    this.counter.update(value => value + 1);
    // this.doubleCounter.update(this.counter() * 2); // error: Signal is read-only
  }

  decrementValue() {
    this.counter.update(value => value - 1);
  }

  logDoubleCounterValue() {
    console.log('Double Counter Value:', this.doubleCounter());
  }

  logOddNumbers() {
    console.log('Odd Numbers:', this.oddNumbers());
  }

  updateNumbers() {
    this.numbers.update(nums => nums.map(num => num * 3));
  }
}
