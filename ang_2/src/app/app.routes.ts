import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { HomeComponent } from './home/home.component';
import { AppproductComponent } from './appproduct/appproduct.component';
import { EditProductComponent } from './editproduct/editproduct.component';
import { ViewProductComponent } from './viewproduct/viewproduct.component';
import { ProductlistComponent } from './productlist/productlist.component';
import { DeleComponent } from './dele/dele.component';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';


export const routes: Routes = [
    {  path:'login',component:LoginComponent},
    {  path:'signup',component:SignupComponent},
    {  path:'home',component:HomeComponent},
    {  path:'addproduct',component:AppproductComponent},
    {  path:'editproduct',component:EditProductComponent},
    {  path:'viewproduct',component:ViewProductComponent},
    {  path:'productlist',component:ProductlistComponent},
    {  path:'deleteproduct',component:DeleComponent}
]
@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })
  export class AppRoutingModule { }