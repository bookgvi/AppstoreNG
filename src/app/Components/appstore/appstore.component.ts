import { Component, OnInit } from '@angular/core';
import { ProductsRepository } from '../../Model/Products/Products.repository';
import { Products } from '../../Model/Products/Products';

@Component({
  selector: 'app-appstore',
  templateUrl: './appstore.component.html',
  styleUrls: ['./appstore.component.scss']
})
export class AppstoreComponent implements OnInit {
  public isDarkCell: boolean;

  constructor(private Products: ProductsRepository) {
  }

  ngOnInit() {
  }

  public get getProducts(): Products[] {
    return this.Products.getProducts;
  }

  public addProduct(params: Object): void {
    // @ts-ignore
    const { title, price, description } = params;
    const nextID: Number = this.getProducts.length + 1;
    const newProduct: Products = new Products(nextID, title, price, description);
    this.Products.addProduct = newProduct;
  }

  public removeProduct(id): void {
    this.Products.removeProduct(id);
  }
}
