/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Interface.java to edit this template
 */
package no.ntnu.idata2306.group1.webshopbackend.repositories;

import no.ntnu.idata2306.group1.webshopbackend.models.Testimonial;
import org.springframework.data.jpa.repository.JpaRepository;

/**
 * The connection with the database, allows us to fetch and push testimonials from it.
 *
 * @author julian
 */
public interface TestimonialRepository extends JpaRepository<Testimonial, Integer> {
}
