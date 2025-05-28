import { Component, input } from '@angular/core';

@Component({
  selector: 'app-signal-inputs',
  standalone: true,
  imports: [],
  templateUrl: './signal-inputs.component.html',
  styleUrl: './signal-inputs.component.css'
})
export class SignalInputsComponent {

  firstName = input.required<string>();  // required signal input
  lastName = input<string>();            // optional signal input
  age = input(0,{alias:'agevalue'});     // optional signal input with default value

}
