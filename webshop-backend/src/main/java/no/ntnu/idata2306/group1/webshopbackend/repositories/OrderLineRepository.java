package no.ntnu.idata2306.group1.webshopbackend.repositories;

import no.ntnu.idata2306.group1.webshopbackend.models.OrderLine;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface OrderLineRepository extends JpaRepository<OrderLine, Integer> {
}
