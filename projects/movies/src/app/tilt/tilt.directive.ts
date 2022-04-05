import {
  Directive,
  ElementRef,
  HostBinding,
  HostListener,
  Input,
  NgModule,
  OnInit,
} from '@angular/core';

@Directive({
  selector: '[tilt]',
})
export class TiltDirective {
  @Input('tilt') rotationDegree = 30;

  @Input('tiltColor') color: string;

  @HostListener('mouseenter', ['$event.pageX', '$event.target'])
  thisIsMyEventListenerCbName(pageX: number, target: HTMLElement) {
    console.log(target);
    const pos = determineDirection(pageX, target);
    console.log(this.rotationDegree);

    this.rotation =
      pos === 0
        ? `rotate(${this.rotationDegree}deg)`
        : `rotate(-${this.rotationDegree}deg)`;
  }

  @HostListener('mouseleave')
  onMouseLeave() {
    this.rotation = 'rotate(0deg)';
  }

  @HostBinding('style.transform')
  rotation = 'rotate(0deg)';

  // private origTransform: string;

  constructor(private elementRef: ElementRef<HTMLElement>) {}
}

/**
 * returns 0 if entered from left, 1 if entered from right
 */
function determineDirection(pos: number, element: HTMLElement): 0 | 1 {
  const width = element.clientWidth;
  const middle = element.getBoundingClientRect().left + width / 2;
  return pos > middle ? 1 : 0;
}
