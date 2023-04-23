/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this
 * license Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package no.ntnu.idata2306.group1.webshopbackend.controllers;

import io.swagger.v3.oas.annotations.Operation;
import no.ntnu.idata2306.group1.webshopbackend.models.Category;
import no.ntnu.idata2306.group1.webshopbackend.models.Product;
import no.ntnu.idata2306.group1.webshopbackend.repositories.CategoryRepository;
import no.ntnu.idata2306.group1.webshopbackend.repositories.ProductRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

/**
 * REST API controller for all endpoints related to products.
 */
@RestController
public class ProductController {
    @Autowired
    private ProductRepository productRepository;

    @Autowired
    private CategoryRepository categoryRepository;

    /**
     * HTTP GET endpoint for getting a list of products.
     *
     * @param name Optional name parameter to search for products by name
     * @return A list of products, filtered by name if the name parameter is provided.
     */
    @GetMapping("/api/products")
    @Operation(
            summary = "Get all products or search products by name",
            description = "Get a list of all products, or a list of products filtered by name if the name parameter is provided."
    )
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

    /**
     * HTTP GET endpoint for getting a product by ID.
     *
     * @param id ID of the product
     * @return The product, or 404 code if not found or 400 code if the ID is not a valid integer.
     */
    @GetMapping("/api/products/{id}")
    @Operation(
            summary = "Get product by ID",
            description = "Get a product by its ID. Return the product in the response body, 404 code if not found, or 400 code if the ID is not a valid integer."
    )
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
     * HTTP POST endpoint for creating a new product.
     *
     * @param product The product object to be created
     * @return 201 Created status code if the product is created, or 404 code if the related category is not found.
     */
    @PostMapping("/api/products")
    @Operation(
            summary = "Create a new product",
            description = "Create a new product with the given data. Return a 201 Created status code if the product is created, or 404 code if the related category is not found."
    )
    public ResponseEntity createProduct(@RequestBody Product product) {
        Category category =
                categoryRepository.findByName(product.getCategory().getName());
        if (category == null) {
            return new ResponseEntity(HttpStatus.NOT_FOUND);
        }
        product.setCategory(category);
        productRepository.save(product);
        return new ResponseEntity(HttpStatus.CREATED);
    }
}
