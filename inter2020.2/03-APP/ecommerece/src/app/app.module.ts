import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/header/header.component';
import { ProductCardComponent } from './shared/product-card/product-card.component';
import { CategoryProductsComponent } from './products/components/category-products/category-products.component';
import { Error404Component } from './shared/error404/error404.component';
import { DetailProductComponent } from './products/components/detail-product/detail-product.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ProductCardComponent,
    CategoryProductsComponent,
    Error404Component,
    DetailProductComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
