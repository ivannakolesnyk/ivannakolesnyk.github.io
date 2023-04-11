package no.ntnu.idata2306.group1.webshopbackend.dto;

/**
 * Data that the user will send in the login request.
 */
public class AuthenticationRequest {
  private String email;
  private String password;

  public AuthenticationRequest() {}

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
