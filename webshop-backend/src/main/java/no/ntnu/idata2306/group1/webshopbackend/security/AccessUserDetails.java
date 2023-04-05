/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package no.ntnu.idata2306.group1.webshopbackend.security;

import no.ntnu.idata2306.group1.webshopbackend.model.data.Role;
import java.util.Collection;
import java.util.LinkedList;
import java.util.List;
import java.util.Set;
import no.ntnu.idata2306.group1.webshopbackend.model.data.User;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

/**
 * Contains authentication information, needed by UserDetailsService
 *
 * @author Girts Strazdins
 */
public class AccessUserDetails implements UserDetails {
    private final String email;
    private final String password;
    private final boolean isActive;
    private final List<GrantedAuthority> authorities = new LinkedList<>();

    public AccessUserDetails(User user) {
        this.email = user.getEmail();
        this.password = user.getPassword();
        this.isActive = user.isActive();
        this.convertRoles(user.getRoles());
    }

    private void convertRoles(Set<Role> roles) {
        authorities.clear();
        for (Role role : roles) {
            authorities.add(new SimpleGrantedAuthority(role.getName()));
        }
    }

    @Override
    public Collection<? extends GrantedAuthority> getAuthorities() {
        return authorities;
    }

    @Override
    public String getPassword() {
        return password;
    }

    @Override
    public String getUsername() {
        return email;
    }

    @Override
    public boolean isAccountNonExpired() {
        return isActive;
    }

    @Override
    public boolean isAccountNonLocked() {
        return isActive;
    }

    @Override
    public boolean isCredentialsNonExpired() {
        return isActive;
    }

    @Override
    public boolean isEnabled() {
        return true;
    }
}
