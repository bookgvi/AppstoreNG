import { Injectable } from '@angular/core';
import { Products } from './Products';
import { Observable, from } from 'rxjs';

@Injectable()
export class ProductDataSourceService {
  private products: Products[] = [
    new Products(1, 'Bread', 10, 'HandMade'),
    new Products(2, 'Butter', 5, 'HandMade'),
    new Products(3, 'Sausage', 25, 'HandMade'),
    new Products(4, 'Milk', 5, 'Cow milk', false)
  ];

  constructor() {
  }

  public getProductsArray(): Products[] {
    return this.products;
  }

  public getProducts(): Observable<Products[]> {
    return new Observable<Products[]>(observer => {
      observer.next(this.products);
    })
  }

  public addProduct(product: Products): void {
    this.products.push(product);
  }

  public removeProduct(id: number): void {
    this.products.splice(id - 1, 1);
  }

  public changeID(index: number, id: number): void {
    this.products[index].id = id;
  }
}
