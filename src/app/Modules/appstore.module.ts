import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';

import { AppstoreComponent } from '../Components/appstore/appstore.component';
import { AddProductFormComponent } from '../Components/add-product-form/add-product-form.component';
import { ProductModelModule } from './product-model.module';

@NgModule({
  imports: [BrowserModule, ProductModelModule, FormsModule],
  declarations: [
    AppstoreComponent,
    AddProductFormComponent
  ],
  exports: [
    AppstoreComponent,
    AddProductFormComponent
  ]
})
export class AppstoreModule { }
