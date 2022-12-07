import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PageNotFoundComponent } from './page-not-found.component';
import { ProductListComponent } from './product-list/product-list.component';
import { LoginComponent } from './user/login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent,
    ProductListComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
