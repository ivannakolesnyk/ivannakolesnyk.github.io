/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package no.ntnu.idata2306.group1.webshopbackend.model.logic;

import java.util.Optional;
import no.ntnu.idata2306.group1.webshopbackend.model.data.User;
import org.springframework.data.repository.ListCrudRepository;

/**
 * The connection with the database, allows us to fetch and push users from it.
 *
 * @author julian
 */

public interface UserRepository extends ListCrudRepository<User, Integer> {
    Optional<User> findByEmail(String email);
}
