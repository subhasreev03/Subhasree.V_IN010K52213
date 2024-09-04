import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Observable, from } from 'rxjs';
import { Products } from './product';




@Injectable({

  providedIn: 'root'
})
export class NgserviceService {

  constructor(private _http:HttpClient) { }

  // get rec user 
  fetchProductListFromRemote():Observable<any>{
     return  this._http.get<any>("http://localhost:8887/getAllProducts");
    }
 
    // add 
    addproductToRemote(product :Products):Observable<any>{
      console.log(product ,"Hi Boss");
      return this._http.post<any>("http://localhost:8887/addProduct",product);
      
    }

    getProductById(id: number): Observable<Products> {
      const url = `${"http://localhost:8887/getProductById"}/${id}`;
      return this._http.get<Products>(url);
    }
  
    // Update product
    updateProduct(product: Products): Observable<Products> {
      const url = "http://localhost:8887/updateProduct";
      return this._http.put<Products>(url, product);
    }
 


    // Delete  user id 
    private baseUrl="http://localhost:8887/deleteProductById";
    deleteuserserv(id: number): Observable<any> {
      return this._http.delete("http://localhost:8887/deleteProductById/"+`${id}`, { responseType: 'text' });
    }

    getProducts(): Observable<Products[]> {
      return this._http.get<Products[]>("http://localhost:6666/getAllProducts");
    }
  }





