import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { AppstoreModule } from './Modules/appstore.module'

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppstoreModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
