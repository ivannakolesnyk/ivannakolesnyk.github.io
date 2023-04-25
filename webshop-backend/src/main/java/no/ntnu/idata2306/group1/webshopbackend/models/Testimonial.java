/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package no.ntnu.idata2306.group1.webshopbackend.models;

import com.fasterxml.jackson.annotation.JsonProperty;
import io.swagger.v3.oas.annotations.media.Schema;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;

/**
 * A testimonial (review) from a customer.
 *
 * @author julian
 */
@Entity
@Schema(description = "A testimonial (review) from a customer")
public class Testimonial {
    @Id
    @GeneratedValue
    @Schema(description = "The unique identifier of the testimonial")
    private int id;

    @Schema(description = "The name of the customer providing the testimonial")
    private String name;

    @Schema(description = "The rating given by the customer")
    private int rating;

    @Schema(description = "The testimonial text provided by the customer")
    private String description;

    @JsonProperty("testimonial_image")
    @Schema(description = "The image associated with the testimonial")
    private String testimonial_image;

    public Testimonial() {
    }

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

    public void setId(int id) {
        this.id = id;
    }

    public String getName() {
        return this.name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public int getRating() {
        return this.rating;
    }

    public void setRating(int rating) {
        this.rating = rating;
    }

    public String getDescription() {
        return this.description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public String getTestimonialImage() {
        return this.testimonial_image;
    }

    public void setTestimonialImage(String testimonial_image) {
        this.testimonial_image = testimonial_image;
    }

    public void setTestimonial_image(String testimonial_image) {
        this.testimonial_image = testimonial_image;
    }
}
