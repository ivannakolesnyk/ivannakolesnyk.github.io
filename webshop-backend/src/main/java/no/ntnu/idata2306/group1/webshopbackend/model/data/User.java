/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package no.ntnu.idata2306.group1.webshopbackend.model.data;

import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.JoinTable;
import jakarta.persistence.ManyToMany;
import java.util.LinkedHashSet;
import java.util.Set;

/**
 * A user.
 *
 * @author julian
 */
@Entity(name = "users")
public class User {
    @Id
    @GeneratedValue
    private int id;
    private String email;
    private String password;
    private String name;
    private String phone_number;
    private int postal_code;
    private String address;
    private boolean active = true;
    @ManyToMany(fetch = FetchType.EAGER)
    @JoinTable(name = "user_role",
        joinColumns = @JoinColumn(name = "user_id"),
        inverseJoinColumns = @JoinColumn(name = "role_id")
    )
    private Set<Role> roles = new LinkedHashSet<>();

    public User() {}

    public User(String email, String password, String name, String phone_number,
            int postal_code, String address) {
        this.email = email;
        this.password = password;
        this.name = name;
        this.phone_number = phone_number;
        this.postal_code = postal_code;
        this.address = address;
    }

    public int getId() {
        return this.id;
    }

    public String getEmail() {
        return this.email;
    }

    public String getPassword() {
        return this.password;
    }

    public String getName() {
        return this.name;
    }

    public String getPhoneNumber() {
        return this.phone_number;
    }

    public int getPostalCode() {
        return this.postal_code;
    }

    public String getAddress() {
        return this.address;
    }

    public boolean isActive() {
        return this.active;
    }

    public Set<Role> getRoles() {
        return this.roles;
    }

    public void setPhoneNumber(String phone_number) {
        this.phone_number = phone_number;
    }

    public void setPostalCode(int postal_code) {
        this.postal_code = postal_code;
    }

    public void setActive(boolean active) {
        this.active = active;
    }

    public void setRoles(Set<Role> roles) {
        this.roles = roles;
    }

    /**
     * Add a role to the user
     *
     * @param role Role to add
     */
    public void addRole(Role role) {
         this.roles.add(role);
    }
}
