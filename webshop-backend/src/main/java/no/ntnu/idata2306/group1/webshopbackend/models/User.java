package no.ntnu.idata2306.group1.webshopbackend.models;

import jakarta.persistence.*;

import java.util.Iterator;
import java.util.LinkedHashSet;
import java.util.Set;

/**
 * User stored in the database.
 */
@Entity(name = "users")
public class User {
  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  private Long id;
  private String email;
  private String password;
  private String name;
  private String phone_number;
  private int postal_code;
  private String address;
  private String city;
  private boolean active = true;
  @ManyToMany(fetch = FetchType.EAGER)
  @JoinTable(name = "user_role", joinColumns = @JoinColumn(name = "user_id"),
      inverseJoinColumns = @JoinColumn(name = "role_id"))
  private Set<Role> roles = new LinkedHashSet<>();

  /**
   * Empty constructor needed for JPA
   */
  public User() {}

  public User(String email, String password, String name, String phone_number,
              int postal_code, String address, String city) {
    this.email = email;
    this.password = password;
    this.name = name;
    this.phone_number = phone_number;
    this.postal_code = postal_code;
    this.address = address;
    this.city = city;
  }

  public void setRoles(Set<Role> roles) {
    this.roles = roles;
  }

  public Set<Role> getRoles() {
    return roles;
  }


  public Long getId() {
    return id;
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

  public void setId(Long id) {
    this.id = id;
  }

  public void setEmail(String username) {
    this.email = username;
  }

  public void setName(String name) {
    this.name = name;
  }

  public void setPhone_number(String phone_number) {
    this.phone_number = phone_number;
  }

  public void setPostal_code(int postal_code) {
    this.postal_code = postal_code;
  }

  public void setAddress(String address) {
    this.address = address;
  }

  public void setCity(String city) {
    this.city = city;
  }

  public void setPassword(String password) {
    this.password = password;
  }

  public boolean isActive() {
    return active;
  }

  public void setActive(boolean active) {
    this.active = active;
  }

  /**
   * Add a role to the user
   *
   * @param role Role to add
   */
  public void addRole(Role role) {
    roles.add(role);
  }

  /**
   * Check if this user is an admin
   *
   * @return True if the user has admin role, false otherwise
   */
  public boolean isAdmin() {
    return this.hasRole("ROLE_ADMIN");
  }

  /**
   * Check if the user has a specified role
   *
   * @param roleName Name of the role
   * @return True if hte user has the role, false otherwise.
   */
  public boolean hasRole(String roleName) {
    boolean found = false;
    Iterator<Role> it = roles.iterator();
    while (!found && it.hasNext()) {
      Role role = it.next();
      if (role.getName().equals(roleName)) {
        found = true;
      }
    }
    return found;
  }

}
