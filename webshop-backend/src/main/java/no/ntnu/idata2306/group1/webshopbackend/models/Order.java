/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package no.ntnu.idata2306.group1.webshopbackend.models;

import com.fasterxml.jackson.annotation.JsonProperty;
import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import java.util.Date;

/**
 * An order, consisting of order lines, that shows a purchase a user made.
 *
 * @author julian
 */
@Entity
public class Order {
    @Id
    @GeneratedValue
    private int id;
    @JsonProperty("order_date")
    private Date order_date;
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "user_id")
    private User user;
    private String status;

    public Order() {}

    public Order(Date order_date, User user, String status) {
        this.order_date = order_date;
        this.user = user;
        this.status = status;
    }

    public int getId() {
        return this.id;
    }

    public Date getOrderDate() {
        return this.order_date;
    }

    public User getUser() {
        return this.user;
    }

    public String getStatus() {
        return this.status;
    }

    public void setOrderDate(Date order_date) {
        this.order_date = order_date;
    }

    public void setUser(User user) {
        this.user = user;
    }
}
