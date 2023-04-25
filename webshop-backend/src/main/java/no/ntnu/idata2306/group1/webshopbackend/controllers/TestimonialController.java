/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this
 * license Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package no.ntnu.idata2306.group1.webshopbackend.controllers;

import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.Parameter;
import io.swagger.v3.oas.annotations.media.Content;
import io.swagger.v3.oas.annotations.media.Schema;
import io.swagger.v3.oas.annotations.responses.ApiResponse;
import no.ntnu.idata2306.group1.webshopbackend.models.Testimonial;
import no.ntnu.idata2306.group1.webshopbackend.repositories.TestimonialRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

/**
 * Determines API endpoints for products.
 *
 * @author julian
 */
@RestController
public class TestimonialController {
    @Autowired
    private TestimonialRepository testimonialRepository;

    @Operation(summary = "Get all testimonials")
    @ApiResponse(responseCode = "200", description = "Testimonials fetched",
            content = { @Content(mediaType = "application/json", schema = @Schema(implementation = Testimonial.class)) })
    @GetMapping("/api/testimonials")
    public ResponseEntity getTestimonials() {
        ResponseEntity response;
        response = new ResponseEntity(this.testimonialRepository.findAll(),
                HttpStatus.OK);
        return response;
    }

    @Operation(summary = "Delete testimonial by ID")
    @ApiResponse(responseCode = "204", description = "Testimonial deleted")
    @DeleteMapping("/api/testimonials/{id}")
    public ResponseEntity deleteTestimonialById(
            @Parameter(description = "ID of the testimonial to be deleted")
            @PathVariable String id) {
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

    @Operation(summary = "Create a new testimonial")
    @ApiResponse(responseCode = "201", description = "Testimonial created",
            content = { @Content(mediaType = "application/json", schema = @Schema(implementation = Testimonial.class)) })
    @PostMapping("/api/testimonials")
    public ResponseEntity createTestimonial(@RequestBody Testimonial testimonial) {
        try {
            Testimonial savedTestimonial = testimonialRepository.save(testimonial);
            return new ResponseEntity<>(savedTestimonial, HttpStatus.CREATED);
        } catch (Exception e) {
            return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
        }
    }

    @Operation(summary = "Update a testimonial")
    @ApiResponse(responseCode = "200", description = "Testimonial updated")
    @PutMapping("/api/testimonials/{id}")
    public ResponseEntity updateTestimonial(
            @Parameter(description = "ID of the testimonial to be updated")
            @PathVariable String id,
            @RequestBody Testimonial testimonial) {
        try {
            Integer parsedId = Integer.parseInt(id);

            if (!testimonialRepository.existsById(parsedId)) {
                return new ResponseEntity<>(HttpStatus.NOT_FOUND);
            }

            testimonialRepository.findById(parsedId).map(existingTestimonial -> {
                existingTestimonial.setName(testimonial.getName());
                existingTestimonial.setRating(testimonial.getRating());
                existingTestimonial.setDescription(testimonial.getDescription());
                existingTestimonial.setTestimonialImage(testimonial.getTestimonialImage());
                return testimonialRepository.save(existingTestimonial);
            });

            return new ResponseEntity<>(HttpStatus.OK);
        } catch (NumberFormatException e) {
            return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
        }
    }
}
