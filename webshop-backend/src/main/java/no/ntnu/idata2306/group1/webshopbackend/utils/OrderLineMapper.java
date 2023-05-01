package no.ntnu.idata2306.group1.webshopbackend.utils;

import no.ntnu.idata2306.group1.webshopbackend.dto.OrderLineDTO;
import no.ntnu.idata2306.group1.webshopbackend.models.OrderLine;

/**
 * This class is responsible for converting OrderLine entities to their respective DTO representation.
 */
public class OrderLineMapper {

    /**
     * Converts an OrderLine entity to an OrderLineDTO.
     *
     * @param orderLine The OrderLine entity to be converted
     * @return An OrderLineDTO representing the given OrderLine entity
     */
    public static OrderLineDTO toOrderLineDTO(OrderLine orderLine) {
        OrderLineDTO orderLineDTO = new OrderLineDTO();
        orderLineDTO.setId(orderLine.getId());
        orderLineDTO.setProductName(orderLine.getProductName());
        orderLineDTO.setQuantity(orderLine.getQuantity());
        orderLineDTO.setPrice(orderLine.getPrice());
        return orderLineDTO;
    }
}
