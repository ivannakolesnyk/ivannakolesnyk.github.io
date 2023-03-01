/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package no.ntnu.idata2306.group1.webshopbackend;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;

/**
 *
 * @author julian
 */
@Entity
public class Product {
    @Id
    @GeneratedValue
    int id;
    private String name;
    private double price;
    private String description;
    private String product_image;
    private int qty_in_stock;

    public Product(String name, double price, String description,
            String product_image, int qty_in_stock) {
        this.name = name;
        this.price = price;
        this.description = description;
        this.product_image = product_image;
        this.qty_in_stock = qty_in_stock;
    }
}
