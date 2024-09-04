import { Component, OnInit } from '@angular/core';
import {NgserviceService} from '../ngservice.service';
import { Products } from '../product';
import { concat } from 'rxjs';
 
@Component({
  selector: 'app-productlist',
  templateUrl: './productlist.component.html',
  styleUrls: ['./productlist.component.css']
})
export class ProductlistComponent implements OnInit {

  constructor(private _service:NgserviceService) {
   }

 _productlist:Products[]=[];

  ngOnInit() {
   return this._service.fetchProductListFromRemote().subscribe(
      data=>{
        console.log("responce recived ",data)
        this._productlist=data;
    },
      error=>console.log("exception recoved ")
    )
  }

}
