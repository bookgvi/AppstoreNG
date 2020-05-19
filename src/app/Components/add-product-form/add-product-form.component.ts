import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-add-product-form',
  templateUrl: './add-product-form.component.html',
  styleUrls: ['./add-product-form.component.scss']
})
export class AddProductFormComponent implements OnInit {
  public title: String = '';
  public description: String = '';
  public price: Number;

  constructor() { }

  ngOnInit() {
  }

  @Output() hAddProduct: EventEmitter<any> = new EventEmitter()
  public addProduct(fields) {
    const errors = fields.reduce((acc, cur) => acc && cur.valid, true)
    if (errors)
      this.hAddProduct.emit({ title: this.title, price: this.price, description: this.description })
  }
}
