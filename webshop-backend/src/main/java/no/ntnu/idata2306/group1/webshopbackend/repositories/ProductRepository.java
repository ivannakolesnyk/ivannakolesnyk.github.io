/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Interface.java to edit this template
 */
package no.ntnu.idata2306.group1.webshopbackend.repositories;

import java.util.List;

import no.ntnu.idata2306.group1.webshopbackend.models.Product;
import org.springframework.data.repository.ListCrudRepository;

/**
 * The connection with the database, allows us to fetch and push products from it.
 *
 * @author julian
 */
public interface ProductRepository extends ListCrudRepository<Product, Integer> {
    List<Product> findByNameContainingIgnoreCase(String name);
}
