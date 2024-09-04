package com.example.demo.Controller;

import com.example.demo.Model.Product;

import com.example.demo.Service.CrudService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.ArrayList;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
public class MyController {

    @Autowired
    private CrudService service;

    // Product Endpoints

    @GetMapping("/getAllProducts")
    public List<Product> fetchProductList() {
        List<Product> products = new ArrayList<>();
        products = service.fetchProductList();
        return products;
    }

    @GetMapping("/getProductById/{id}")
    public Product fetchProductById(@PathVariable Long id) {
        return service.fetchProductById(id);
    }

    @PostMapping("/addProduct")
    public Product saveProduct(@RequestBody Product product) {
        return service.saveProductToDB(product);
    }

    @PutMapping("/updateProduct")
    public Product updateProduct(@RequestBody Product product) {
        return service.saveProductToDB(product);
    }

    @DeleteMapping("/deleteProductById/{id}")
    public String deleteProductById(@PathVariable Long id) {
        return service.deleteProductById(id);
    }

    @DeleteMapping("/deleteAllProducts")
    public String deleteAllProducts() {
        return service.deleteAllProducts();
    }
}

