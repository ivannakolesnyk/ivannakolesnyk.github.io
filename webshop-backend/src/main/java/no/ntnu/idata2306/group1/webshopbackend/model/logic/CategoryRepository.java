package no.ntnu.idata2306.group1.webshopbackend.model.logic;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import no.ntnu.idata2306.group1.webshopbackend.model.data.Category;

@Repository
public interface CategoryRepository extends JpaRepository<Category, Integer> {
}

