import {
  ContentChild,
  ContentChildren,
  Directive,
  Input,
  QueryList,
  SimpleChanges,
  ViewChild,
  ViewChildren
} from '@angular/core';
import { SetColorDirective } from './set-color.directive';

@Directive({
  selector: 'table'
})
export class ColorSwitcherDirective {
  @Input('switch-color')
  swColor: boolean;

  // @ts-ignore
  @ContentChildren(SetColorDirective, { descendants: true })
  cells: QueryList<SetColorDirective>;

  // @ts-ignore
  @ContentChild(SetColorDirective)
  td: SetColorDirective;

  ngOnChanges(changes: { [props: string]: SimpleChanges }): void {
    if (this.cells) {
      this.setBgColor(this.swColor);
    }
  }

  ngAfterContentInit(): void {
    this.cells.changes.subscribe(() => {
      setTimeout(() => this.setBgColor(this.swColor), 0);
    })
  }

  private setBgColor(swColor: boolean): void {
    this.cells.forEach((cell, index) => {
      index % 2 ? cell.setBgColor(swColor) : ''
    })
  }
}
