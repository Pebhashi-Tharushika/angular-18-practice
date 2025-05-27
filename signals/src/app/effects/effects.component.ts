import { Component, effect, Injector, OnDestroy, runInInjectionContext, signal } from '@angular/core';

@Component({
  selector: 'app-effects',
  standalone: true,
  imports: [],
  templateUrl: './effects.component.html',
  styleUrl: './effects.component.css'
})
export class EffectsComponent implements OnDestroy {

  count = signal(0);

  private loggingEffect = effect(() => {
    console.log('count changed to', this.count());
  },{manualCleanup: true});

  // loggingEffect = effect(() => {
  //   console.log('count changed to', this.count());
  // });

  // constructor() {
  //   // listen to a signal
  //   effect(() => {
  //     // console.log('effect executed');
  //     console.log('count changed to', this.count());
  //     // this.count.set(this.count() + 1);
  //   });
  // }

  // constructor(private injector: Injector) { }
  

  // initializeLoggingEffect() {
  //   // runInInjectionContext(this.injector, () => {
  //   //   effect(() => {
  //   //     console.log('count changed to', this.count());
  //   //   });
  //   // });

  //   effect(() => {
  //     console.log('count changed to', this.count());
  //   }, { injector: this.injector });
  // }

  // updatecount() {
  //   this.count.update(value => value + 1);
  // }

  ngOnDestroy(): void {
    this.loggingEffect.destroy();
  }

}
