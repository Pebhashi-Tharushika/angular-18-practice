import { AsyncPipe } from '@angular/common';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { interval, Subscription } from 'rxjs';

@Component({
  selector: 'app-rxjs-interop',
  standalone: true,
  imports: [AsyncPipe],
  templateUrl: './rxjs-interop.component.html',
  styleUrl: './rxjs-interop.component.css'
})
export class RxjsInteropComponent implements OnInit, OnDestroy {

  private subsription !: Subscription;

  counterObservable = interval(1000);

  counterSignal = toSignal(this.counterObservable, { initialValue: 0, manualCleanup: true });

  ngOnInit(): void {
    this.subsription = this.counterObservable.subscribe();
  }
  ngOnDestroy(): void {
    if (this.subsription) {
      this.subsription.unsubscribe();
    }
  }

}
