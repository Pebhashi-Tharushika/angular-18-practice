import { Component, effect, signal, viewChild, viewChildren } from '@angular/core';
import { CounterComponent } from './counter/counter.component';
import { EffectsComponent } from './effects/effects.component';
import { EqualityComponent } from './equality/equality.component';
import { UntrackedComponent } from './untracked/untracked.component';
import { CleanupComponent } from './cleanup/cleanup.component';
import { RxjsInteropComponent } from './rxjs-interop/rxjs-interop.component';
import { ToObservableComponent } from './to-observable/to-observable.component';
import { SignalInputsComponent } from './signal-inputs/signal-inputs.component';
import { ModelInputsComponent } from './model-inputs/model-inputs.component';
import { ViewQueriesComponent } from './view-queries/view-queries.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CounterComponent, EffectsComponent, EqualityComponent, UntrackedComponent, CleanupComponent, RxjsInteropComponent, ToObservableComponent,
    SignalInputsComponent, ModelInputsComponent, ViewQueriesComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'signals';


  // `cmp` is a Signal that holds a reference to a child component
  cmp = viewChild(ViewQueriesComponent);

  // `el1` is a Signal that holds a reference to an element in the own template
  el1 = viewChild('el1');

  // `el2` is a Signal that holds references to elements in the own template
  el2 = viewChildren('el2');

  constructor() {
    effect(() => {
      console.log("cmp: ", this.cmp());
      console.log("el1: ", this.el1());
      console.log("el2: ", this.el2());
    });
  }

  // parentChecked = true;

  // handleCheckChange(value: boolean) {
  //   console.log("parent handle checked change", value);
  //   this.parentChecked = value;
  // }

  // showCleanupComponent = signal(false);

  // toggleCleanupComponent() {
  //   this.showCleanupComponent.set(!this.showCleanupComponent());
  // }
}
