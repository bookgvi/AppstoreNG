import { NgModule } from '@angular/core';

import { ProductsRepository } from '../Model/Products/Products.repository';
import { ProductDataSourceService } from '../Model/Products/ProductDataSource.service';

@NgModule({
  providers: [
    { provide: ProductDataSourceService, useClass: ProductDataSourceService },
    ProductsRepository
  ]
})
export class ProductModelModule { }
