import { NgStyle } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-attribute-directive',
  standalone: true,
  imports: [NgStyle],
  templateUrl: './attribute-directive.component.html',
  styleUrl: './attribute-directive.component.css'
})
export class AttributeDirectiveComponent {
  isActive: boolean = true;

  get getActiveColor(): string {
    return this.isActive ? 'blue' : 'green'
  }

  get getTextTransform(): string {
    return this.isActive ? 'lowercase' : 'uppercase';
  }

}
