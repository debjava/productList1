import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ProductsComponent } from './products/products.component';
import { Subjects } from './subjects/subject.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductsComponent,
    Subjects
  ],
  imports: [
    BrowserModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
