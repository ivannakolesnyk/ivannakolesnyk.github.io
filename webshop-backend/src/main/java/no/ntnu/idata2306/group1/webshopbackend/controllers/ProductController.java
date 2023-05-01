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

import java.util.Map;
import java.util.Optional;

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

    @DeleteMapping("/api/products")
    @Operation(
            summary = "Delete a product",
            description = "Delete a product with the given ID. Return a 204 No Content status code if the product is deleted, or 404 code if the product is not found."
    )
    public ResponseEntity deleteProduct(@RequestBody Map<String, Integer> body) {
        int id = body.get("id");
        Optional<Product> optionalProduct = productRepository.findById(id);
        if (!optionalProduct.isPresent()) {
            return new ResponseEntity(HttpStatus.NOT_FOUND);
        }

        productRepository.delete(optionalProduct.get());
        return new ResponseEntity(HttpStatus.NO_CONTENT);
    }

    @PutMapping("/api/products")
    @Operation(
            summary = "Update a product",
            description = "Update a product with the given data. Return a 200 OK status code if the product is updated, or 404 code if the product or related category is not found."
    )
    public ResponseEntity updateProduct(@RequestBody Product updatedProduct) {
        Optional<Product> optionalProduct = productRepository.findById(updatedProduct.getId());

        if (!optionalProduct.isPresent()) {
            return new ResponseEntity(HttpStatus.NOT_FOUND);
        }

        Category category = categoryRepository.findByName(updatedProduct.getCategory().getName());
        if (category == null) {
            return new ResponseEntity(HttpStatus.NOT_FOUND);
        }

        Product product = optionalProduct.get();
        product.setCategory(category);
        product.setDescription(updatedProduct.getDescription());
        product.setImageAlt(updatedProduct.getImageAlt());
        product.setIngredients(updatedProduct.getIngredients());
        product.setName(updatedProduct.getName());
        product.setPrice(updatedProduct.getPrice());
        product.setProductImage(updatedProduct.getProductImage());
        product.setQtyInStock(updatedProduct.getQtyInStock());
        product.setSale(updatedProduct.getSale());

        productRepository.save(product);
        return new ResponseEntity(HttpStatus.OK);
    }
}
