import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';

import { AppstoreComponent } from '../Components/appstore/appstore.component';
import { AddProductFormComponent } from '../Components/add-product-form/add-product-form.component';

import { PaAttrDirective } from '../Components/appstore/attr.directive';
import { FieldValueDirective } from '../Components/add-product-form/field-value.directive';
import { IfFormValidDirective } from '../Components/add-product-form/if-form-valid.directive';
import { SetColorDirective } from '../Components/appstore/set-color.directive';
import { ColorSwitcherDirective } from '../Components/appstore/color-switcher.directive';

import { ProductModelModule } from './product-model.module';

@NgModule({
  imports: [BrowserModule, ProductModelModule, FormsModule],
  declarations: [
    AppstoreComponent,
    AddProductFormComponent,
    PaAttrDirective,
    FieldValueDirective,
    IfFormValidDirective,
    SetColorDirective,
    ColorSwitcherDirective
  ],
  exports: [
    AppstoreComponent,
    AddProductFormComponent,
    PaAttrDirective,
    FieldValueDirective,
    IfFormValidDirective,
    SetColorDirective,
    ColorSwitcherDirective
  ]
})
export class AppstoreModule { }
