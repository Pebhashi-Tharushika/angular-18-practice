import { Component, OnDestroy, OnInit } from '@angular/core';
import { interval, Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit, OnDestroy {

  intervalSubscription !: Subscription;

  ngOnInit(): void {

    let customObservable = new Observable(observer => {
      let count = 0;
      setInterval(() => {
        observer.next(count); //Observable notify / emit value to observers via next() method
        count++;
      },1000);
    });

    this.intervalSubscription = customObservable.subscribe(count => {
      console.log(count);
    })
  }

  ngOnDestroy(): void {
   this.intervalSubscription.unsubscribe();
  }
  

  // Creates an Observable that emits sequential and incremental numbers every specified interval of time 
  // ngOnInit(): void {
  //   // subscribe
  //   this.intervalSubscription = interval(1000).subscribe((val) => {
  //     console.log(val);
  //   });
  // }

  // ngOnDestroy(): void {
  //   // unsubscribe
  //   this.intervalSubscription.unsubscribe();
  // }

}
