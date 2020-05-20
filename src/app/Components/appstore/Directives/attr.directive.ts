import { Directive, ElementRef, Input, SimpleChange } from '@angular/core';

@Directive({
  selector: "[pa-attr]"
})
export class PaAttrDirective {
  constructor (private element: ElementRef) {}
  @Input("pa-attr")
  last: Boolean;

  ngOnChanges(changes: {[property: string]: SimpleChange }) {
    console.log(changes);
    if (this.last) {
      this.element.nativeElement.classList.add("last");
    } else {
      this.element.nativeElement.classList.remove("last");
    }
  }
}
