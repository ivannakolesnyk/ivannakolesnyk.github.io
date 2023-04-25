/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this
 * license Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package no.ntnu.idata2306.group1.webshopbackend.models;

import io.swagger.v3.oas.annotations.media.Schema;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;

/**
 * A category, for products in our webshop.
 *
 * @author julian
 */
@Entity
@Schema(description = "A category for products in the webshop")
public class Category {
    @Id
    @GeneratedValue
    @Schema(description = "The unique identifier of the category")
    private int id;

    @Schema(description = "The name of the category")
    private String name;

    public Category() {}

    public Category(String name) {
        this.name = name;
    }

    public int getId() {
        return this.id;
    }

    public String getName() {
        return this.name;
    }
}
