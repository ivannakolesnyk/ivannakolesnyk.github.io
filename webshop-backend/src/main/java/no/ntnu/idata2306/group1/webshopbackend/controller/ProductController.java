/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this
 * license Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package no.ntnu.idata2306.group1.webshopbackend.controller;

import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import no.ntnu.idata2306.group1.webshopbackend.model.data.Category;
import no.ntnu.idata2306.group1.webshopbackend.model.data.Product;
import no.ntnu.idata2306.group1.webshopbackend.model.logic.CategoryRepository;
import no.ntnu.idata2306.group1.webshopbackend.model.logic.ProductRepository;

/**
 * Determines API endpoints for products.
 *
 * @author julian
 */
@RestController
public class ProductController {
    @Autowired
    private ProductRepository productRepository;

    @Autowired
    private CategoryRepository categoryRepository;

    @GetMapping("/api/products")
    public ResponseEntity getProducts(@RequestParam(required = false) String name) {
        ResponseEntity response;
        if (name != null) {
            response = new ResponseEntity(
                    this.productRepository.findByNameContainingIgnoreCase(name), HttpStatus.OK);
        } else {
            response = new ResponseEntity(this.productRepository.findAll(), HttpStatus.OK);
        }
        return response;
    }

    @GetMapping("/api/products/{id}")
    public ResponseEntity getProductById(@PathVariable String id) {
        try {
            Integer parsedId = Integer.parseInt(id);
            return this.productRepository.findById(parsedId)
                    .map(product -> new ResponseEntity<>(product, HttpStatus.OK))
                    .orElse(new ResponseEntity<>(HttpStatus.NOT_FOUND));
        } catch (NumberFormatException e) {
            return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
        }
    }

    /**
     * Creates a new product in the database with the provided product data. The category specified
     * in the product data must already exist in the database.
     *
     * @param product A Product object representing the product data to be stored. The object must
     *        include a valid Category object with an existing ID.
     * 
     * @return ResponseEntity with HTTP status code 201 (Created) if the product is successfully
     *         created, or HTTP status code 404 (Not Found) if the specified category does not
     *         exist.
     */
    @PostMapping("/products")
    public ResponseEntity createProduct(@RequestBody Product product) {
        Optional<Category> optionalCategory =
                categoryRepository.findById(product.getCategory().getId());
        if (!optionalCategory.isPresent()) {
            return new ResponseEntity(HttpStatus.NOT_FOUND);
        }
        product.setCategory(optionalCategory.get());
        productRepository.save(product);
        return new ResponseEntity(HttpStatus.CREATED);
    }
}
