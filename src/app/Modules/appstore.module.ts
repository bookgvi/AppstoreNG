import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';

import { AppstoreComponent } from '../Components/appstore/appstore.component';
import { ProductModelModule } from './product-model.module';

@NgModule({
  imports: [BrowserModule, ProductModelModule, FormsModule],
  declarations: [AppstoreComponent],
  exports: [AppstoreComponent]
})
export class AppstoreModule { }
