import { Directive, Input, SimpleChange, SimpleChanges, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[is-form-valid]'
})
export class IfFormValidDirective {
  constructor(private container: ViewContainerRef, private template: TemplateRef<Object>) {}

  @Input('is-form-valid')
  validator: boolean;

  ngOnChanges(changes: { [property: string]: SimpleChanges }) {
    const change = changes['validator'];
    if (!change.firstChange && !change.currentValue) {
      this.container.clear();
    } else if (change.currentValue) {
      this.container.createEmbeddedView(this.template);
    }
  }
}
