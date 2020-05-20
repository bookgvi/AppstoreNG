import {
  Directive,
  EventEmitter,
  HostBinding,
  HostListener,
  Input,
  Output,
  SimpleChange
} from '@angular/core'

@Directive({
  selector: 'input[field-value]',
  exportAs: 'field-value'
})
export class FieldValueDirective {
  private valid: Boolean;

  @Input('field-value')
  prop: string;

  @HostBinding('value')
  fieldVal: string;

  ngOnChanges(changes: { [property: string]: SimpleChange }) {
    const change = changes['prop'];
    if (change.currentValue !== this.fieldVal) {
      this.fieldVal = change.currentValue || '';
    }
  }

  @Output('field-valueChange') change = new EventEmitter<string>();
  @HostListener('input', ['$event.target'])
  updateField(el: string): void {
    this.fieldVal = el['value'];
    this.valid = !!this.fieldVal && this.fieldVal.length >= el['minLength'];
    this.change.emit(el['value']);
  }
}
