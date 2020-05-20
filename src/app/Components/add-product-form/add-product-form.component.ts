import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { NgForm, NgModel } from '@angular/forms';

@Component({
  selector: 'app-add-product-form',
  templateUrl: './add-product-form.component.html',
  styleUrls: ['./add-product-form.component.scss']
})
export class AddProductFormComponent implements OnInit {
  public title: String = '';
  public description: String = '';
  public price: Number;
  public isValidTitle: Boolean = true;
  public isValidPrice: Boolean = true;

  constructor() { }

  ngOnInit() {
  }

  @Output() hAddProduct: EventEmitter<any> = new EventEmitter()
  public addProduct(fields: Object, form: NgForm) {
    // @ts-ignore
    const { title, price } = fields;
    this.isValidTitle = title.valid;
    this.isValidPrice = price.valid;
    if (this.isValidTitle && this.isValidPrice)
      this.hAddProduct.emit({ title: this.title, price: this.price, description: this.description });
  }
}
