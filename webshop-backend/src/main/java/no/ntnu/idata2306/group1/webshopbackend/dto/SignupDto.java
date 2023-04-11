package no.ntnu.idata2306.group1.webshopbackend.dto;

/**
 * Data transfer object (DTO) for data from the sign-up form.
 */
public class SignupDto {
  private final String email;
  private final String password;

  public SignupDto(String email, String password) {
    this.email = email;
    this.password = password;
  }

  public String getEmail() {
    return email;
  }

  public String getPassword() {
    return password;
  }
}
