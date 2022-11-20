import {
  Directive,
  ElementRef,
  HostListener,
  Input,
  Renderer2,
} from '@angular/core';

@Directive({
  selector: '[appColorFull]',
})
export class ColorFullDirective {
  @Input('opacity') opacity: string;
  constructor(private element: ElementRef, private render: Renderer2) {
    this.render.setStyle(this.element.nativeElement, 'opacity', this.opacity);
    element.nativeElement.style.opacity = this.opacity;
  }

  @HostListener('mouseenter') onMouseEnter() {
    this.ChangeColor(this.opacity);
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.ChangeColor('0.3');
  }

  ChangeColor(opacity: string) {
    this.render.setStyle(this.element.nativeElement, 'opacity', opacity);
  }
}
