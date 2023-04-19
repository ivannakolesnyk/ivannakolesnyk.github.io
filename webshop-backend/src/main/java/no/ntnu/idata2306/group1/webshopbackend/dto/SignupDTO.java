package no.ntnu.idata2306.group1.webshopbackend.dto;

/**
 * Data transfer object (DTO) for data from the sign-up form.
 */
public class SignupDTO {
  private final String email;
  private final String password;
  private final String name;
  private final String phone_number;
  private final int postal_code;
  private final String address;
  private final String city;

  public SignupDTO(String email, String password, String name, String phone_number,
                   int postal_code, String address, String city) {
    this.email = email;
    this.password = password;
    this.name = name;
    this.phone_number = phone_number;
    this.postal_code = postal_code;
    this.address = address;
    this.city = city;
  }

  public String getEmail() {
    return email;
  }

  public String getPassword() {
    return password;
  }

  public String getName() {
    return name;
  }

  public String getPhone_number() {
    return phone_number;
  }

  public int getPostal_code() {
    return postal_code;
  }

  public String getAddress() {
    return address;
  }

  public String getCity() {
    return city;
  }
}
