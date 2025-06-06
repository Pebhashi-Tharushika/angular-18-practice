import { Component, computed, effect, input } from '@angular/core';

@Component({
  selector: 'app-signal-inputs',
  standalone: true,
  imports: [],
  templateUrl: './signal-inputs.component.html',
  styleUrl: './signal-inputs.component.css'
})
export class SignalInputsComponent {

  // firstName = input.required<string>();  // required signal input
  // lastName = input<string>();            // optional signal input
  // age = input(0, { alias: 'agevalue' });     // optional signal input with default value

  // ageMultiplied = computed(() => this.age() * 5);

  // constructor(){
  //   effect(()=> {
  //     console.log(this.firstName());
  //   })
  // }

  sample = input(false, {
    transform: (value: boolean | string) => {
      console.log('Transform: ', typeof (value));
      return typeof value === 'string' ? value === '' : value;
    }
  });

  constructor() {
    effect(() => {
      console.log(this.sample());
    });
  }

}
