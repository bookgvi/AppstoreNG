import { Directive, HostBinding } from '@angular/core';

@Directive({
  selector: 'td'
})
export class SetColorDirective {
  @HostBinding('class')
  bgClass: string;

  setBgColor(isSetColor: boolean): void {
    this.bgClass = isSetColor ? 'bg-dark' : '';
  }
}
