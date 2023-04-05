/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package no.ntnu.idata2306.group1.webshopbackend.security;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;
import java.util.Optional;
import no.ntnu.idata2306.group1.webshopbackend.model.data.User;
import no.ntnu.idata2306.group1.webshopbackend.model.logic.UserRepository;

/**
 * Provides AccessUserDetails needed for authentication
 *
 * @author Girts Strazdins
 */
@Service
public class AccessUserService implements UserDetailsService {
    @Autowired
    UserRepository userRepository;

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        Optional<User> user = userRepository.findByEmail(username);
        if (user.isPresent()) {
            return new AccessUserDetails(user.get());
        } else {
            throw new UsernameNotFoundException("User " + username + "not found");
        }
    }
}
