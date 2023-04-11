package no.ntnu.idata2306.group1.webshopbackend.controllers;

import no.ntnu.idata2306.group1.webshopbackend.dto.UserProfileDto;
import no.ntnu.idata2306.group1.webshopbackend.models.User;
import no.ntnu.idata2306.group1.webshopbackend.services.AccessUserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

/**
 * REST API controller serving endpoints for users.
 */
@CrossOrigin
@RestController
public class UserController {
  @Autowired
  private AccessUserService userService;

  /**
   * Return user profile information
   *
   * @param username Username for which the profile is requested
   * @return The profile information or error code when not authorized
   */
  @GetMapping("/api/users/{username}")
  public ResponseEntity<?> getProfile(@PathVariable String username) throws InterruptedException {
    User sessionUser = userService.getSessionUser();
    if (sessionUser != null && sessionUser.getEmail().equals(username)) {
      UserProfileDto profile = new UserProfileDto();
      return new ResponseEntity<>(profile, HttpStatus.OK);
    } else if (sessionUser == null) {
      return new ResponseEntity<>("Profile data accessible only to authenticated users",
          HttpStatus.UNAUTHORIZED);
    } else {
      return new ResponseEntity<>("Profile data for other users not accessible!",
          HttpStatus.FORBIDDEN);
    }
  }

  /**
   * Update user profile information
   *
   * @param username Username for which the profile is updated
   * @return HTTP 200 OK or error code with error message
   */
  @PutMapping("/api/users/{username}")
  public ResponseEntity<String> updateProfile(@PathVariable String username,
      @RequestBody UserProfileDto profileData) throws InterruptedException {
    User sessionUser = userService.getSessionUser();
    ResponseEntity<String> response;
    if (sessionUser != null && sessionUser.getEmail().equals(username)) {
      if (profileData != null) {
        if (userService.updateProfile(sessionUser, profileData)) {
          Thread.sleep(2000); // Simulate long operation
          response = new ResponseEntity<>("", HttpStatus.OK);
        } else {
          response = new ResponseEntity<>("Could not update Profile data",
              HttpStatus.INTERNAL_SERVER_ERROR);
        }
      } else {
        response = new ResponseEntity<>("Profile data not supplied", HttpStatus.BAD_REQUEST);
      }
    } else if (sessionUser == null) {
      response = new ResponseEntity<>("Profile data accessible only to authenticated users",
          HttpStatus.UNAUTHORIZED);
    } else {
      response = new ResponseEntity<>("Profile data for other users not accessible!",
          HttpStatus.FORBIDDEN);
    }
    return response;
  }
}
