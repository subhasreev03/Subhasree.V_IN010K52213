import { Component } from '@angular/core';
import { NgserviceService } from '../ngservice.service'; // Adjust the path as needed
import { Products } from '../product'; // Adjust the path as needed
import { Router } from '@angular/router';
@Component({
  selector: 'app-editproduct',
  templateUrl: './editproduct.component.html',
  styleUrls: ['./editproduct.component.css']
})
export class EditProductComponent {
  product=new Products()
  constructor(private _route:Router,private _service:NgserviceService) { }   

  ngOnInit(): void {
  }

  edituserformsubmit(){
    this._service.updateProduct(this.product).subscribe(
      data=>{
        console.log("data added ");
        this._route.navigate(['productlist'])
    },
      error=>console.log("error")
    )
  }
  gotolist(){
    console.log("working clicking in add component ")
  }

  

}