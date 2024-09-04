import { Component, OnInit } from '@angular/core';
import { Products } from '../product';
import { NgserviceService } from '../ngservice.service';

@Component({
  selector: 'app-dele',
  templateUrl: './dele.component.html',
  styleUrls: ['./dele.component.css']
})
export class DeleComponent implements OnInit {

  products: Products[] = [];
  product = new Products();

  constructor(private _service: NgserviceService) { }

  ngOnInit(): void {
    this.getProducts();
  }

  deleteuser(id: number): void {
    console.log("Delete button clicked with id:", id); // Debugging line
    this._service.deleteuserserv(id).subscribe(
      () => {
        console.log("Product deleted", id);
        this.products = this.products.filter(p => p.id !== id);
      },
      error => console.log("Error deleting product", error)
    );
  }

  getProducts(): void {
    this._service.getProducts().subscribe(
      data => this.products = data,
      error => console.log("Error fetching products", error)
    );
  }
}

