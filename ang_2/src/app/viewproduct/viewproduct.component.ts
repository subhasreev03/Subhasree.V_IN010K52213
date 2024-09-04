import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NgserviceComponent } from '../ngservice/ngservice.component'; // Adjust the path as needed
import { Products } from '../product'; // Adjust the path as needed
import { NgserviceService } from '../ngservice.service';

@Component({
  selector: 'app-viewproduct',
  templateUrl: './viewproduct.component.html',
  styleUrls: ['./viewproduct.component.css']
})
 
export class ViewProductComponent {
  product: Products | undefined;
  productId: number | undefined;

  constructor(private productService: NgserviceService) {}

  fetchProductDetails(): void {
    if (this.productId) {
      this.productService.getProductById(this.productId).subscribe(product => {
        this.product = product;
      });
    }
  }
}
