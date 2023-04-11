package no.ntnu.idata2306.group1.webshopbackend.repositories;

import no.ntnu.idata2306.group1.webshopbackend.models.Role;
import org.springframework.data.jpa.repository.JpaRepository;

public interface RoleRepository extends JpaRepository<Role, Long> {
  Role findOneByName(String name);
}
