import { Component } from '@angular/core';
import { IfComponent } from './if/if.component';
import { ForComponent } from './for/for.component';
import { SwitchComponent } from './switch/switch.component';
import { AttributeDirectiveComponent } from './attribute-directive/attribute-directive.component';
import { NgTemplateComponent } from './ng-template/ng-template.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [IfComponent, ForComponent, SwitchComponent, AttributeDirectiveComponent, NgTemplateComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {


}
