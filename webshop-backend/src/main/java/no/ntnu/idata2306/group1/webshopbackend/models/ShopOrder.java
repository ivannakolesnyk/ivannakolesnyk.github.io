/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package no.ntnu.idata2306.group1.webshopbackend.models;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonProperty;
import io.swagger.v3.oas.annotations.media.Schema;
import jakarta.persistence.*;

import java.util.Date;

/**
 * An order, consisting of order lines, that shows a purchase a user made.
 *
 * @author julian
 */
@Entity
@Schema(description = "An order, consisting of order lines, representing a purchase made by a user")
public class ShopOrder {
    @Id
    @GeneratedValue
    @Schema(description = "The unique identifier of the order")
    private int id;

    @JsonProperty("order_date")
    @Schema(description = "The date the order was placed")
    private Date order_date;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "user_id")
    @JsonIgnore
    @Schema(description = "The user who placed the order")
    private User user;

    @Schema(description = "The status of the order")
    private String status;

    public ShopOrder() {
    }

    public ShopOrder(Date order_date, User user, String status) {
        this.order_date = order_date;
        this.user = user;
        this.status = status;
    }

    public Date getOrder_date() {
        return order_date;
    }

    public void setOrder_date(Date order_date) {
        this.order_date = order_date;
    }

    public int getId() {
        return this.id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public Date getOrderDate() {
        return this.order_date;
    }

    public User getUser() {
        return this.user;
    }

    public void setUser(User user) {
        this.user = user;
    }

    public String getStatus() {
        return this.status;
    }

    public void setStatus(String status) {
        this.status = status;
    }
}
