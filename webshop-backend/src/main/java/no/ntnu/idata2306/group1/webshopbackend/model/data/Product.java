/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this
 * license Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package no.ntnu.idata2306.group1.webshopbackend.model.data;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.annotation.JsonProperty;
import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;

/**
 * A product in our webshop.
 *
 * @author julian
 */
@Entity
public class Product {
    @Id
    @GeneratedValue
    private int id;
    private String name;
    private double price;
    private boolean sale;
    private String description;
    @JsonProperty("product_image")
    private String product_image;
    @JsonProperty("qty_in_stock")
    private int qty_in_stock;
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "category_id")
    @JsonIgnoreProperties({"hibernateLazyInitializer", "handler"})
    private Category category;

    public Product() {}

    public Product(String name, double price, boolean sale, String description,
            String product_image, int qty_in_stock, Category category) {
        this.name = name;
        this.price = price;
        this.sale = sale;
        this.description = description;
        this.product_image = product_image;
        this.qty_in_stock = qty_in_stock;
        this.category = category;
    }

    public int getId() {
        return this.id;
    }

    public String getName() {
        return this.name;
    }

    public double getPrice() {
        return this.price;
    }

    public boolean getSale() {
        return this.sale;
    }

    public String getDescription() {
        return this.description;
    }

    public String getProductImage() {
        return this.product_image;
    }

    public int getQtyInStock() {
        return this.qty_in_stock;
    }

    public Category getCategory() {
        return this.category;
    }

    public void setProductImage(String product_image) {
        this.product_image = product_image;
    }

    public void setQtyInStock(int qty_in_stock) {
        this.qty_in_stock = qty_in_stock;
    }

    public Category setCategory(Category category) {
        return this.category = category;
    }
}
