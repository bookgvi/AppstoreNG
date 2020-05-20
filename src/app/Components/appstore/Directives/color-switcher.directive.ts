import { ContentChild, Directive, Input, SimpleChanges } from '@angular/core';
import { SetColorDirective } from './set-color.directive';

@Directive({
  selector: 'table'
})
export class ColorSwitcherDirective {
  @Input('switch-color')
  swColor: boolean;

  // @ts-ignore
  @ContentChild(SetColorDirective)
  setColor: SetColorDirective;

  ngOnChanges(changes: { [props: string]: SimpleChanges }): void {
    if (this.setColor)
      this.setColor.setBgColor(this.swColor);
  }
}
