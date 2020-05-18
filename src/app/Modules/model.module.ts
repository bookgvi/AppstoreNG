import { NgModule } from '@angular/core';

import { ProductsRepository } from '../Model/Products.repository';
import { ProductDataSourceService } from '../Model/ProductDataSource.service';

@NgModule({
  providers: [ProductDataSourceService, ProductsRepository]
})
export class ModelModule { }
