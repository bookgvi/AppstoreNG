import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ProductModelModule } from './product-model.module';
import { AddProductModule } from './addProduct.module';

import { AppstoreComponent } from '../Components/appstore/appstore.component';

import { PaAttrDirective } from '../Components/appstore/Directives/attr.directive';
import { SetColorDirective } from '../Components/appstore/Directives/set-color.directive';
import { ColorSwitcherDirective } from '../Components/appstore/Directives/color-switcher.directive';

import { AddTaxPipe } from '../Components/appstore/Pipes/addTax.pipe';

@NgModule({
  imports: [FormsModule, ProductModelModule, AddProductModule, CommonModule],
  declarations: [
    AppstoreComponent,
    PaAttrDirective,
    SetColorDirective,
    ColorSwitcherDirective,
    AddTaxPipe
  ],
  exports: [
    AppstoreComponent,
    PaAttrDirective,
    SetColorDirective,
    ColorSwitcherDirective,
    AddTaxPipe
  ]
})
export class AppstoreModule { }
