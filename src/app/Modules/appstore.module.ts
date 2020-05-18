import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';

import { AppstoreComponent } from '../Components/appstore/appstore.component';
import { ModelModule } from './model.module';

@NgModule({
  imports: [BrowserModule, ModelModule, FormsModule],
  declarations: [AppstoreComponent],
  exports: [AppstoreComponent]
})
export class AppstoreModule { }
