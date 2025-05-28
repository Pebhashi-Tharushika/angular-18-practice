import { Component, effect, OnInit, signal, untracked } from '@angular/core';

@Component({
  selector: 'app-untracked',
  standalone: true,
  imports: [],
  templateUrl: './untracked.component.html',
  styleUrl: './untracked.component.css'
})
export class UntrackedComponent implements OnInit {

  count = signal(0);
  name = signal('Angular');

  constructor() {
    // effect(() => {
    //   console.log(`hello ${untracked(this.name)}. count is ${untracked(this.count)}`);
    // });
    
    effect(() => {
      untracked(()=>{
        console.log(`hello ${this.name()}. count is ${this.count()}`);
      });
    });
  }

  ngOnInit(): void {
    setTimeout(() => {
      console.log('count is triggered');
      this.count.set(3);
    }, 3000);
    setTimeout(() => {
      console.log('name is triggered');
      this.name.set('Angular 18');
    }, 6000);
  }
}
