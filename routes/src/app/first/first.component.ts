import { Component } from '@angular/core';
import { IDeactivateGuard } from '../services/guards/deactivate-guard.service';

@Component({
  selector: 'app-first',
  standalone: true,
  imports: [],
  templateUrl: './first.component.html',
  styleUrl: './first.component.css'
})
export class FirstComponent implements IDeactivateGuard {
  canDeactivate(): boolean {
    return confirm('Are you sure you want to leave this page?');
  }

}
