import {Directive, ElementRef, HostListener, Renderer2} from '@angular/core';

@Directive({
  selector: '[appPinkSize]'
})
export class PinkSizeDirective {

  constructor(private el: ElementRef) {}

  @HostListener('mouseenter')
    mouseEnter()
    {
      this.el.nativeElement.style.fontSize = `25px`
      this.el.nativeElement.style.color = `pink`
    }

  @HostListener('mouseleave')
    mouseLeave()
    {
      this.el.nativeElement.style.fontSize = `24px`
      this.el.nativeElement.style.color = `black`
    }

}
