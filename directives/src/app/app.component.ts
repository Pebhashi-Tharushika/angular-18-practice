import { Component } from '@angular/core';
import { IfComponent } from './if/if.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [IfComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  

}
