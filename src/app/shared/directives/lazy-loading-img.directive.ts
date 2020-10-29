import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appLazyLoadingImg]'
})
export class LazyLoadingImgDirective {

  constructor({ nativeElement }: ElementRef<HTMLImageElement>) {
    nativeElement.setAttribute('loading', 'lazy');
  }
}
