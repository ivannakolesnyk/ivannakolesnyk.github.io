package no.ntnu.idata2306.group1.webshopbackend.controllers;

import no.ntnu.idata2306.group1.webshopbackend.dto.AuthenticationRequest;
import no.ntnu.idata2306.group1.webshopbackend.dto.AuthenticationResponse;
import no.ntnu.idata2306.group1.webshopbackend.dto.SignupDto;
import no.ntnu.idata2306.group1.webshopbackend.security.JwtUtil;
import no.ntnu.idata2306.group1.webshopbackend.services.AccessUserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.web.bind.annotation.*;

/**
 * Controller responsible for authentication.
 */
@CrossOrigin
@RestController
public class AuthenticationController {
  @Autowired
  private AuthenticationManager authenticationManager;
  @Autowired
  private AccessUserService userService;
  @Autowired
  private JwtUtil jwtUtil;


  /**
   * HTTP POST request to /authenticate
   *
   * @param authenticationRequest The request JSON object containing username and password
   * @return OK + JWT token; Or UNAUTHORIZED
   */
  @PostMapping("/api/authenticate")
  public ResponseEntity<?> authenticate(@RequestBody AuthenticationRequest authenticationRequest) {
    try {
      authenticationManager.authenticate(new UsernamePasswordAuthenticationToken(
          authenticationRequest.getEmail(), authenticationRequest.getPassword()));
    } catch (BadCredentialsException e) {
      return new ResponseEntity<>("Invalid email or password", HttpStatus.UNAUTHORIZED);
    }
    final UserDetails userDetails =
        userService.loadUserByUsername(authenticationRequest.getEmail());
    final String jwt = jwtUtil.generateToken(userDetails);
    return ResponseEntity.ok(new AuthenticationResponse(jwt));
  }

  /**
   * This method processes data received from the sign-up form (HTTP POST)
   *
   * @return Name of the template for the result page
   */
  @PostMapping("/api/signup")
  public ResponseEntity<String> signupProcess(@RequestBody SignupDto signupData) {
    String errorMessage =
        userService.tryCreateNewUser(signupData.getEmail(), signupData.getPassword(), signupData.getName(), signupData.getPhone_number(), signupData.getPostal_code(), signupData.getAddress(), signupData.getCity());
    ResponseEntity<String> response;
    if (errorMessage == null) {
      response = new ResponseEntity<>(HttpStatus.OK);
    } else {
      response = new ResponseEntity<>(errorMessage, HttpStatus.BAD_REQUEST);
    }
    return response;
  }
}
