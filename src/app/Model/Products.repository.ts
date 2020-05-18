import { Injectable } from '@angular/core';
import { Products } from './Products';
import { ProductDataSourceService } from './ProductDataSource.service';

@Injectable()
export class ProductsRepository {
  private products: Products[];

  constructor(private dataSource: ProductDataSourceService) {
    dataSource.getProducts().subscribe(data => {
      this.products = data;
    })
  }

  public get getProducts(): Products[] {
    return this.products;
  }

  public set addProduct(product: Products) {
    this.dataSource.addProduct(product);
  }
}
