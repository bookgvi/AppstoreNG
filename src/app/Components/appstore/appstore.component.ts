import { Component, OnInit } from '@angular/core';
import { ProductsRepository } from '../../Model/Products/Products.repository';
import { Products } from '../../Model/Products/Products';

@Component({
  selector: 'app-appstore',
  templateUrl: './appstore.component.html',
  styleUrls: ['./appstore.component.scss']
})
export class AppstoreComponent implements OnInit {
  public title: String = '';
  public description: String = '';
  public price: Number;

  constructor(private Products: ProductsRepository) {
  }

  ngOnInit() {
  }

  public get getProducts(): Products[] {
    return this.Products.getProducts;
  }

  public addProduct(): void {
    const nextID: Number = this.getProducts.length + 1;
    const newProduct: Products = new Products(nextID, this.title, this.price, this.description);
    this.Products.addProduct = newProduct;
  }

  public removeProduct(id): void {
    this.Products.removeProduct(id);
  }
}
