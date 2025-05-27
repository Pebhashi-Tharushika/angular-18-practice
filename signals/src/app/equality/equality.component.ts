import { Component, effect, signal } from '@angular/core';
import { isEqual } from 'lodash';

@Component({
  selector: 'app-equality',
  standalone: true,
  imports: [],
  templateUrl: './equality.component.html',
  styleUrl: './equality.component.css'
})
export class EqualityComponent {

  // data = signal({ name: 'John', age: 30 },{
  //   equal: (a, b) => a.name === b.name && a.age === b.age
  // });

  data = signal({ name: 'John', age: 30 },{
    equal: isEqual
  });

  constructor() {
    effect(() => {
      console.log('Executing the effect');
      console.log("Data changed", this.data());
    });
  }

  ngOnInit() {
    setTimeout(() => {
      this.data.set({ name: 'John', age: 30 }); 
    }, 4000);
  }
}
