import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { AddProductFormComponent } from '../Components/add-product-form/add-product-form.component';

import { FieldValueDirective } from '../Components/add-product-form/Directives/field-value.directive';
import { IfFormValidDirective } from '../Components/add-product-form/Directives/if-form-valid.directive';

@NgModule({
  imports: [CommonModule, FormsModule],
  declarations: [
    AddProductFormComponent,
    FieldValueDirective,
    IfFormValidDirective
  ],
  exports: [
    AddProductFormComponent,
    FieldValueDirective,
    IfFormValidDirective
  ]
})
export class AddProductModule {
}
