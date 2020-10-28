import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appLazyLoadingImg]'
})
export class LazyLoadingImgDirective {

  constructor({ nativeElement }: ElementRef<HTMLImageElement>) {
    const supports = 'loading' in HTMLImageElement.prototype;

    if (supports) { nativeElement.setAttribute('loading', 'lazy'); }
  }
}
