import { Component, OnInit } from '@angular/core';
import { ProductsRepository } from '../../Model/Products.repository';
import { Products } from '../../Model/Products';

@Component({
  selector: 'app-appstore',
  templateUrl: './appstore.component.html',
  styleUrls: ['./appstore.component.scss']
})
export class AppstoreComponent implements OnInit {

  constructor(private Products: ProductsRepository) {
  }

  ngOnInit() {
  }

  public get getProducts() {
    return this.Products.getProducts;
  }
}
