package no.ntnu.idata2306.group1.webshopbackend.utils;

import no.ntnu.idata2306.group1.webshopbackend.dto.ShopOrderDTO;
import no.ntnu.idata2306.group1.webshopbackend.models.OrderLine;
import no.ntnu.idata2306.group1.webshopbackend.models.ShopOrder;
import no.ntnu.idata2306.group1.webshopbackend.repositories.OrderLineRepository;
import org.springframework.stereotype.Component;

import java.util.List;

/**
 * A utility class for mapping between {@link ShopOrder} and {@link ShopOrderDTO}.
 * The class provides methods to convert ShopOrder objects to ShopOrderDTO objects,
 * and vice versa, with or without user information.
 */
@Component
public class ShopOrderMapper {

    /**
     * Converts a {@link ShopOrder} object to a {@link ShopOrderDTO} object,
     * including order lines and total price calculation.
     *
     * @param shopOrder           the ShopOrder object to be converted
     * @param orderLineRepository the OrderLineRepository object
     * @return a ShopOrderDTO object with order lines and total price
     */
    public ShopOrderDTO toShopOrderDTOWithTotal(ShopOrder shopOrder, OrderLineRepository orderLineRepository) {
        List<OrderLine> orderLines = orderLineRepository.findByOrder(shopOrder);

        // Calculate the total price of the order
        double totalPrice = orderLines.stream()
                .mapToDouble(orderLine -> orderLine.getPrice() * orderLine.getQuantity())
                .sum();

        // Convert ShopOrder to ShopOrderDTO
        ShopOrderDTO shopOrderDTO = new ShopOrderDTO();
        shopOrderDTO.setId(shopOrder.getId());
        shopOrderDTO.setOrder_date(shopOrder.getOrderDate());
        shopOrderDTO.setStatus(shopOrder.getStatus());
        shopOrderDTO.setTotal(totalPrice);

        return shopOrderDTO;
    }
}
