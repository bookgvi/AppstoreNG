import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppstoreModule } from './Modules/appstore.module'

import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppstoreModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
