import { AsyncPipe } from '@angular/common';
import { Component } from '@angular/core';
import { interval } from 'rxjs';

@Component({
  selector: 'app-rxjs-interop',
  standalone: true,
  imports: [AsyncPipe],
  templateUrl: './rxjs-interop.component.html',
  styleUrl: './rxjs-interop.component.css'
})
export class RxjsInteropComponent {

  counterObservable = interval(1000);

}
