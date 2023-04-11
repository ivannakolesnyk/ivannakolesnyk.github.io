package no.ntnu.idata2306.group1.webshopbackend.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import no.ntnu.idata2306.group1.webshopbackend.models.Category;

@Repository
public interface CategoryRepository extends JpaRepository<Category, Integer> {
  Category findByName(String name);
}

