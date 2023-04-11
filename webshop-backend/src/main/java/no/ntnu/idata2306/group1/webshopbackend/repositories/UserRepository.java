package no.ntnu.idata2306.group1.webshopbackend.repositories;

import no.ntnu.idata2306.group1.webshopbackend.models.User;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface UserRepository extends JpaRepository<User, Long> {
  Optional<User> findByEmail(String email);
}
