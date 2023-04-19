/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this
 * license Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package no.ntnu.idata2306.group1.webshopbackend.controllers;

import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;
import no.ntnu.idata2306.group1.webshopbackend.models.Testimonial;
import no.ntnu.idata2306.group1.webshopbackend.repositories.TestimonialRepository;
import org.springframework.web.bind.annotation.DeleteMapping;

/**
 * Determines API endpoints for products.
 *
 * @author julian
 */
@RestController
public class TestimonialController {
    @Autowired
    private TestimonialRepository testimonialRepository;

    @GetMapping("/api/testimonials")
    public ResponseEntity getTestimonials() {
        ResponseEntity response;
        response = new ResponseEntity(this.testimonialRepository.findAll(),
                HttpStatus.OK);
        return response;
    }

    @DeleteMapping("/api/testimonials/{id}")
    public ResponseEntity deleteTestimonialById(@PathVariable String id) {
        try {
            Integer parsedId = Integer.parseInt(id);
            if (this.testimonialRepository.existsById(parsedId)) {
                this.testimonialRepository.deleteById(parsedId);
                return new ResponseEntity<>(HttpStatus.NO_CONTENT);
            } else {
                return new ResponseEntity<>(HttpStatus.NOT_FOUND);
            }
        } catch (NumberFormatException e) {
            return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
        }
    }
}
