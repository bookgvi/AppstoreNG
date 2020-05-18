import { NgModule } from '@angular/core';

import { ProductsRepository } from '../Model/Products/Products.repository';
import { ProductDataSourceService } from '../Model/Products/ProductDataSource.service';

@NgModule({
  providers: [ProductDataSourceService, ProductsRepository]
})
export class ProductModelModule { }
