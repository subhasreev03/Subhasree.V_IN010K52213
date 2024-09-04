import { Component, OnInit } from '@angular/core';
import{NgForm} from '@angular/forms'
import { Router } from '@angular/router';
import { NgserviceService } from '../ngservice.service';
import { Products } from '../product';


@Component({
  selector: 'app-appproduct',
  templateUrl: './appproduct.component.html',
  styleUrls: ['./appproduct.component.css']
})
export class AppproductComponent implements OnInit {
product=new Products()
  constructor(private _route:Router,private _service:NgserviceService) { }   

  ngOnInit(): void {
  }

  adduserformsubmit(){
    this._service.addproductToRemote(this.product).subscribe(
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
