import { Injectable } from '@angular/core';
import { Products } from './Products';
import { Observable, from } from 'rxjs';

@Injectable()
export class ProductDataSourceService {
  private products: Products[] = [
    new Products(1, 'Bread', 10,'HandMade'),
    new Products(2, 'Butter', 5,'HandMade'),
    new Products(3, 'Sausage', 25,'HandMade'),
    new Products(4, 'Milk', 5,'Cow milk', true)
  ];
  constructor() { }

  public getProducts(): Observable<Products[]> {
    return from([this.products]);
  }
}
