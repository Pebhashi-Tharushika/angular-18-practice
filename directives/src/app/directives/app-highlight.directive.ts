import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appHighlight]', //Directive name
  standalone: true
})
export class AppHighlightDirective {

  @Input() appHighlight = ''

  constructor(private el: ElementRef) {} //constructor dependency injection

  // capture mouse-enter event of the element which is referenced by "el" here
  @HostListener('mouseenter') onMouseEnter() {
    this.changeBackgroundColor(this.appHighlight)
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.changeBackgroundColor('transparent')
  }

  private changeBackgroundColor(color: string) {
    this.el.nativeElement.style.backgroundColor = color;
  }

}
