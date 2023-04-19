package no.ntnu.idata2306.group1.webshopbackend.repositories;

import no.ntnu.idata2306.group1.webshopbackend.models.ShopOrder;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ShopOrderRepository extends JpaRepository<ShopOrder, Integer> {
}

