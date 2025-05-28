import { Component, effect, signal } from '@angular/core';

@Component({
  selector: 'app-cleanup',
  standalone: true,
  imports: [],
  templateUrl: './cleanup.component.html',
  styleUrl: './cleanup.component.css'
})
export class CleanupComponent {

  count = signal(0);

  constructor() {

    effect((onCleanup) => {
      
      const timer = setInterval(() => {
        console.log(`count is ${this.count()}`);
      }, 1000);

      // call back to clear the interval when the effect is disposed which happens when the component is destroyed
      onCleanup(() => {
        console.log('Clearing interval');
        clearInterval(timer);
      });

    });
    
  }

}
