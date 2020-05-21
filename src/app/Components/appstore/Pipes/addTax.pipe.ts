import { Pipe } from '@angular/core';

@Pipe({
  name: 'addTax'
})
export class AddTaxPipe {
  private default: number = 0;
  public transform(value: any, tax?: any): number {
    const valueNum = Number.parseFloat(value);
    const taxNum = tax ? Number.parseInt(tax) : this.default;
    return valueNum + (valueNum * taxNum / 100);
  }
}
