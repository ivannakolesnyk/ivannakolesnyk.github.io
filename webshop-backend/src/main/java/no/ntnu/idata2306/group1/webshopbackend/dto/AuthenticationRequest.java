package no.ntnu.idata2306.group1.webshopbackend.dto;

import io.swagger.v3.oas.annotations.media.Schema;

@Schema(description = "Represents data for user authentication, containing email and password")
public class AuthenticationRequest {
  @Schema(description = "User's email", example = "user@example.com")
  private String email;

  @Schema(description = "User's password", example = "password123")
  private String password;

  public AuthenticationRequest() {
  }

  public AuthenticationRequest(String email, String password) {
    this.email = email;
    this.password = password;
  }

  public String getEmail() {
    return this.email;
  }

  public void setEmail(String email) {
    this.email = email;
  }

  public String getPassword() {
    return this.password;
  }

  public void setPassword(String password) {
    this.password = password;
  }
}
