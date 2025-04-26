import { NgClass, NgStyle } from '@angular/common';
import { Component } from '@angular/core';
import { AppHighlightDirective } from '../directives/app-highlight.directive';

@Component({
  selector: 'app-attribute-directive',
  standalone: true,
  imports: [NgStyle, NgClass, AppHighlightDirective], // import AppHighlightDirective 
  templateUrl: './attribute-directive.component.html',
  styleUrl: './attribute-directive.component.css'
})
export class AttributeDirectiveComponent {
  isActive: boolean = false;

  get getActiveColor(): string {
    return this.isActive ? 'blue' : 'green'
  }

  get getTextTransform(): string {
    return this.isActive ? 'lowercase' : 'uppercase';
  }

}
