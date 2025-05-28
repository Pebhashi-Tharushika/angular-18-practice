import { AsyncPipe } from '@angular/common';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { Observable, Subscription, throwError} from 'rxjs';

@Component({
  selector: 'app-rxjs-interop',
  standalone: true,
  imports: [AsyncPipe],
  templateUrl: './rxjs-interop.component.html',
  styleUrl: './rxjs-interop.component.css'
})
export class RxjsInteropComponent implements OnInit, OnDestroy {

  errorMessage: string = '';

  observable = throwError(()=> new Error('An Error Occured'));

  errorSignal = toSignal(this.observable);

  // private subscription !: Subscription;

  // counterObservable = interval(1000);

  // counterSignal = toSignal(this.counterObservable, { initialValue: 0, manualCleanup: true });

  ngOnInit(): void {
    
    try {
      this.errorSignal();
    } catch (e: any) {
      this.errorMessage = e.message;
    }
    // this.subscription = this.counterObservable.subscribe();
  }
  ngOnDestroy(): void {
    // if (this.subscription) {
    //   this.subscription.unsubscribe();
    // }
  }

}
