/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package no.ntnu.idata2306.group1.webshopbackend.models;

import com.fasterxml.jackson.annotation.JsonProperty;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;

/**
 * A testimonial (review) from a customer.
 *
 * @author julian
 */
@Entity
public class Testimonial {
    @Id
    @GeneratedValue
    private int id;
    private String name;
    private int rating;
    private String description;
    @JsonProperty("testimonial_image")
    private String testimonial_image;

    public Testimonial() {}

    public Testimonial(String name, int rating, String description,
            String testimonial_image) {
        this.name = name;
        this.rating = rating;
        this.description = description;
        this.testimonial_image = testimonial_image;
    }

    public int getId() {
        return this.id;
    }

    public String getName() {
        return this.name;
    }


    public int getRating() {
        return this.rating;
    }

    public String getDescription() {
        return this.description;
    }

    public String getTestimonialImage() {
        return this.testimonial_image;
    }


    public void setTestimonialImage(String testimonial_image) {
        this.testimonial_image = testimonial_image;
    }
}
