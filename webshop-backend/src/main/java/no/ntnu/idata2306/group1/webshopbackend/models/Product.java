/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this
 * license Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package no.ntnu.idata2306.group1.webshopbackend.models;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.annotation.JsonProperty;
import io.swagger.v3.oas.annotations.media.Schema;
import jakarta.persistence.*;

/**
 * A product in our webshop.
 *
 * @author julian
 */
@Schema(description = "Product entity representing a product in the system")
@Entity
public class Product {
    @Schema(description = "Unique identifier of the product")
    @Id
    @GeneratedValue
    private int id;

    @Schema(description = "Name of the product")
    private String name;

    @Schema(description = "Price of the product")
    private double price;

    @Schema(description = "Sale status of the product")
    private boolean sale;

    @Schema(description = "Description of the product")
    @Column(length = 1000)
    private String description;

    @Schema(description = "List of ingredients for the product")
    private String ingredients;

    @Schema(description = "Alternative text for the product image")
    private String imageAlt;

    @Schema(description = "URL of the product image")
    @JsonProperty("product_image")
    private String product_image;

    @Schema(description = "Quantity of the product in stock")
    @JsonProperty("qty_in_stock")
    private int qty_in_stock;

    @Schema(description = "Category to which the product belongs")
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "category_id")
    @JsonIgnoreProperties({"hibernateLazyInitializer", "handler"})
    private Category category;

    public Product() {
    }

    public Product(String name, double price, boolean sale, String description,
                   String ingredients, String imageAlt, String product_image, int qty_in_stock,
                   Category category) {
        this.name = name;
        this.price = price;
        this.sale = sale;
        this.description = description;
        this.ingredients = ingredients;
        this.imageAlt = imageAlt;
        this.product_image = product_image;
        this.qty_in_stock = qty_in_stock;
        this.category = category;
    }

    public int getId() {
        return this.id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getName() {
        return this.name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public double getPrice() {
        return this.price;
    }

    public void setPrice(double price) {
        this.price = price;
    }

    public boolean getSale() {
        return this.sale;
    }

    public void setSale(boolean sale) {
        this.sale = sale;
    }

    public String getDescription() {
        return this.description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public String getIngredients() {
        return this.ingredients;
    }

    public void setIngredients(String ingredients) {
        this.ingredients = ingredients;
    }

    public String getImageAlt() {
        return this.imageAlt;
    }

    public void setImageAlt(String imageAlt) {
        this.imageAlt = imageAlt;
    }

    public String getProductImage() {
        return this.product_image;
    }

    public void setProductImage(String product_image) {
        this.product_image = product_image;
    }

    public int getQtyInStock() {
        return this.qty_in_stock;
    }

    public void setQtyInStock(int qty_in_stock) {
        this.qty_in_stock = qty_in_stock;
    }

    public Category getCategory() {
        return this.category;
    }

    public Category setCategory(Category category) {
        return this.category = category;
    }
}
