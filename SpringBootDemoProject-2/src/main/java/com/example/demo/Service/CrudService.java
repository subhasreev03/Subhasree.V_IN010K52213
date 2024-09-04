package com.example.demo.Service;

import com.example.demo.Exception.ProductNotFoundException;

import com.example.demo.Model.Product;

import com.example.demo.Repo.ProductRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CrudService {

    @Autowired
    private ProductRepository productRepository;



    // Product Methods
    public List<Product> fetchProductList() {
        return productRepository.findAll();
    }

    public Product fetchProductById(Long id) {
        return productRepository.findById(id)
                .orElseThrow(() -> new ProductNotFoundException("Product not found with id: " + id));
    }

    public Product saveProductToDB(Product product) {
        return productRepository.save(product);
    }

    public String deleteProductById(Long id) {
        Product product = productRepository.findById(id)
                .orElseThrow(() -> new ProductNotFoundException("Product not found with id: " + id));
        productRepository.delete(product);
        return "Product deleted successfully!";
    }

    public String deleteAllProducts() {
        productRepository.deleteAll();
        return "All products deleted successfully!";
    }
}
//INSERT INTO PRODUCT VALUES(1000,1,500,'Fenty','Lipstick','Excellent','Deep Dues')
//INSERT INTO PRODUCT VALUES(1500,2,501,'Rare Beauty','Blush','Excellent','Pinky Space')
