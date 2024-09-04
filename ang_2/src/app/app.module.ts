import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { AppComponent} from './app.component';
import { AppproductComponent } from './appproduct/appproduct.component';
import { EditProductComponent } from './editproduct/editproduct.component';
import { ProductlistComponent } from './productlist/productlist.component';
import { ViewProductComponent } from './viewproduct/viewproduct.component';
import {  HttpClientModule } from '@angular/common/http';
import { NgserviceService } from './ngservice.service';
import { DeleComponent } from './dele/dele.component';
//import { ProductlistComponent } from './productlist/productlist.component';

@NgModule({
  declarations: [
    AppproductComponent,
    EditProductComponent,
    ProductlistComponent,
    ViewProductComponent,
    DeleComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule, // Import FormsModule here
    RouterModule
  ],
    


  providers: [NgserviceService],
  
})
export class AppModule { }