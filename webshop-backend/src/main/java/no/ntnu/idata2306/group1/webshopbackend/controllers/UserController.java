package no.ntnu.idata2306.group1.webshopbackend.controllers;

import java.util.Optional;
import no.ntnu.idata2306.group1.webshopbackend.dto.ChangePasswordDTO;
import no.ntnu.idata2306.group1.webshopbackend.dto.UserProfileDTO;
import no.ntnu.idata2306.group1.webshopbackend.models.User;
import no.ntnu.idata2306.group1.webshopbackend.repositories.UserRepository;
import no.ntnu.idata2306.group1.webshopbackend.services.AccessUserService;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.Parameter;
import io.swagger.v3.oas.annotations.media.Content;
import io.swagger.v3.oas.annotations.media.Schema;
import io.swagger.v3.oas.annotations.responses.ApiResponse;
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
  private UserRepository userRepository;
  @Autowired
  private AccessUserService userService;

  /**
   * Return all users.
   *
   * @return A list of all users
   */
  @Operation(summary = "Return all users")
  @ApiResponse(responseCode = "200", description = "List of all users",
          content = { @Content(mediaType = "application/json",
                  schema = @Schema(implementation = User.class)) })
  @GetMapping("/api/users")
  public ResponseEntity getAllUsers() {
    return new ResponseEntity(this.userRepository.findAll(), HttpStatus.OK);
  }

  /**
   * Return user profile information
   *
   * @param username Username for which the profile is requested
   * @return The profile information or error code when not authorized
   */
  @Operation(summary = "Return user profile information")
  @ApiResponse(responseCode = "200", description = "User profile information",
          content = { @Content(mediaType = "application/json",
                  schema = @Schema(implementation = UserProfileDTO.class)) })
  @GetMapping("/api/users/{username}")
  public ResponseEntity<?> getProfile(
          @Parameter(description = "Username for which the profile is requested")
          @PathVariable String username) {
    User sessionUser = userService.getSessionUser();
    if (sessionUser != null && sessionUser.getEmail().equals(username)) {
      UserProfileDTO profile = new UserProfileDTO();
      profile.setName(sessionUser.getName());
      profile.setEmail(sessionUser.getEmail());
      profile.setPhone_number(sessionUser.getPhone_number());
      profile.setPostal_code(sessionUser.getPostal_code());
      profile.setAddress(sessionUser.getAddress());
      profile.setCity(sessionUser.getCity());
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
  @Operation(summary = "Update user profile information")
  @ApiResponse(responseCode = "200", description = "User profile information updated")
  @PutMapping("/api/users/{username}")
  public ResponseEntity<String> updateProfile(
          @Parameter(description = "Username for which the profile is updated")
          @PathVariable String username,
          @RequestBody UserProfileDTO profileData) {
    User sessionUser = userService.getSessionUser();
    ResponseEntity<String> response;
    if (sessionUser != null && sessionUser.getEmail().equals(username)) {
      if (profileData != null) {
        if (userService.updateProfile(sessionUser, profileData)) {
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

  @Operation(summary = "Change user password")
  @ApiResponse(responseCode = "200", description = "User password changed")
  @PutMapping("/api/users/{username}/password")
  public ResponseEntity<String> changePassword(
          @Parameter(description = "Username for which the password is changed")
          @PathVariable String username,
          @RequestBody ChangePasswordDTO passwordData) {
    User sessionUser = userService.getSessionUser();
    ResponseEntity<String> response;
    if (sessionUser != null && sessionUser.getEmail().equals(username)) {
      if (passwordData != null) {
        if (userService.changePassword(sessionUser, passwordData.getCurrentPassword(), passwordData.getNewPassword())) {
          response = new ResponseEntity<>("", HttpStatus.OK);
        } else {
          response = new ResponseEntity<>("Could not change password", HttpStatus.INTERNAL_SERVER_ERROR);
        }
      } else {
        response = new ResponseEntity<>("Password data not supplied", HttpStatus.BAD_REQUEST);
      }
    } else if (sessionUser == null) {
      response = new ResponseEntity<>("Password change accessible only to authenticated users", HttpStatus.UNAUTHORIZED);
    } else {
      response = new ResponseEntity<>("Password change for other users not accessible!", HttpStatus.FORBIDDEN);
    }
    return response;
  }

  /**
   * Delete a user
   *
   * @param username Username for which profile to delete
   * @return The HTTP status code indicated whether or not it was deleted
   */
  @Operation(summary = "Delete a user")
  @ApiResponse(responseCode = "204", description = "User deleted")
  @DeleteMapping("/api/users/{username}")
  public ResponseEntity deleteProfile(
          @Parameter(description = "Username for which profile to delete")
          @PathVariable String username) {
    User sessionUser = userService.getSessionUser();
    if (sessionUser != null && sessionUser.isAdmin()) {
      Optional<User> found = this.userRepository.findByEmail(username);
      if (found.isPresent()) {
        User user = found.get();
        this.userRepository.deleteById(user.getId());
        return new ResponseEntity(HttpStatus.NO_CONTENT);
      } else {
        return new ResponseEntity(HttpStatus.NOT_FOUND);
      }
    } else if (sessionUser == null) {
      return new ResponseEntity("Delete endpoint accessible only to authenticated users",
              HttpStatus.UNAUTHORIZED);
    } else {
      return new ResponseEntity("Delete endpoint accessible only to admins",
              HttpStatus.FORBIDDEN);
    }
  }

}
