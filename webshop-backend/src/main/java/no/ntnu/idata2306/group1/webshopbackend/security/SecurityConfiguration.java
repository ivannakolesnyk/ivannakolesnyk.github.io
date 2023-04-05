/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package no.ntnu.idata2306.group1.webshopbackend.security;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.web.SecurityFilterChain;

/**
 * Sets up authentication type by creating AuthenticationManager.
 *
 * @author julian
 */
@Configuration
public class SecurityConfiguration {
    @Autowired
    private UserDetailsService userDetailsService;

    /**
     * This method will be called automatically by the framework to find out what authentication to use.
     * Here we tell that we want to load users from a database
     *
     * @param auth Authentication builder
     * @throws Exception
     */
    @Autowired
    protected void configure(AuthenticationManagerBuilder auth) throws Exception {
        auth.userDetailsService(userDetailsService);
    }

    /**
     * This method will be called automatically by the framework to find out what authentication to use.
     *
     * @param http HttpSecurity setting builder
     * @throws Exception
     * @return the security filter chain
     */
    @Bean
    public SecurityFilterChain configureAuthorizationFilterChain(HttpSecurity http) throws Exception {
        // Set up the authorization requests, starting from most restrictive at the top, to least restrictive on bottom
        http
            // This enables the access restrictions
            .authorizeHttpRequests()
            // This configures the requested authorization (role)
            .requestMatchers("/admin").hasRole("ADMIN")
            .requestMatchers("/user").hasAnyRole("USER", "ADMIN")
            .requestMatchers("/").permitAll()
            // Redirect to an auto-provided login-form if the user is not authenticated
            .and().formLogin();

        return http.build();
    }

    /**
     * Decides which encryption to use for password checking
     *
     * @return The password encrypter
     */
    @Bean
    public PasswordEncoder getPasswordEncoder() {
        return new BCryptPasswordEncoder();
    }
}
