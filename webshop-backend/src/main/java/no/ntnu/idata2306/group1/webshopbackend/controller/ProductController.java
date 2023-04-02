/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package no.ntnu.idata2306.group1.webshopbackend.controller;

import no.ntnu.idata2306.group1.webshopbackend.model.logic.ProductRepository;
import no.ntnu.idata2306.group1.webshopbackend.model.data.Product;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

/**
 * Determines API endpoints for products.
 *
 * @author julian
 */
@RestController
public class ProductController {
    @Autowired
    private ProductRepository productRepository;

    @GetMapping("/products")
    public ResponseEntity getProducts(@RequestParam(required = false) String name) {
        ResponseEntity response;
        if (name != null) {
            response = new ResponseEntity(
                this.productRepository.findByNameContainingIgnoreCase(name),
                HttpStatus.OK
            );
        } else {
            response = new ResponseEntity(this.productRepository.findAll(),
                    HttpStatus.OK);
        }
        return response;
    }

    @PostMapping("/products")
    public ResponseEntity createProduct(@RequestBody Product product) {
        this.productRepository.save(product);
        return new ResponseEntity(HttpStatus.CREATED);
    }
}
