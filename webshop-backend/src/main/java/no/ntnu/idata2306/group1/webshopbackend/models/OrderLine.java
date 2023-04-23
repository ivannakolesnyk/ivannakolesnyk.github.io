/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package no.ntnu.idata2306.group1.webshopbackend.models;

import jakarta.persistence.*;

/**
 * A single line representing a product in an order.
 *
 * @author julian
 */
@Entity
public class OrderLine {
    @Id
    @GeneratedValue
    private int id;
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "order_id")
    private ShopOrder order;

    private int quantity;
    private double price;
    private String productName;

    public OrderLine() {
    }

    public OrderLine(ShopOrder order, int quantity, double price, String productName) {
        this.order = order;
        this.quantity = quantity;
        this.price = price;
        this.productName = productName;
    }

    public int getId() {
        return this.id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public ShopOrder getOrder() {
        return this.order;
    }

    public void setOrder(ShopOrder order) {
        this.order = order;
    }

    public int getQuantity() {
        return this.quantity;
    }

    public void setQuantity(int quantity) {
        this.quantity = quantity;
    }

    public double getPrice() {
        return this.price;
    }

    public void setPrice(double price) {
        this.price = price;
    }

    public String getProductName() {
        return productName;
    }

    public void setProductName(String productName) {
        this.productName = productName;
    }
}
