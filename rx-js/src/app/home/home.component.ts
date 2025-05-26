import { Component, OnDestroy, OnInit } from '@angular/core';
import { filter, interval, map, Observable, Subscription } from 'rxjs';

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

    let customObservable = new Observable<number>(observer => {
      let count = 0;
      setInterval(() => {
        observer.next(count); // Emit value to observers

        if (count === 3) {
          observer.complete();       // No more values after this
          observer.next(-1);        // This will NOT be emitted
        }

        if (count > 5) {
          observer.error('Count is greater than 5');
        }

        count++;
      }, 1000);

    });


    // this.intervalSubscription = customObservable.subscribe({
    //   next: data => {
    //     console.log(data);
    //   },
    //   error: error => {
    //     console.log(error);
    //   },
    //   complete: () => {
    //     console.log('Completed!');
    //   }
    // });

    this.intervalSubscription = customObservable.pipe(
      filter(data => data > 0), 
      map(data => 'Value emitted: ' + data))
      .subscribe({
        next: data => {
          console.log(data);
        },
        error: error => {
          console.log(error);
        },
        complete: () => {
          console.log('Completed!');
        }
      });
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
