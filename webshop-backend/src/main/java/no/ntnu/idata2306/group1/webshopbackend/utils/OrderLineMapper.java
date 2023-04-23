package no.ntnu.idata2306.group1.webshopbackend.utils;

import no.ntnu.idata2306.group1.webshopbackend.dto.OrderLineDTO;
import no.ntnu.idata2306.group1.webshopbackend.models.OrderLine;

public class OrderLineMapper {
    public static OrderLineDTO toOrderLineDTO(OrderLine orderLine) {
        OrderLineDTO orderLineDTO = new OrderLineDTO();
        orderLineDTO.setId(orderLine.getId());
        orderLineDTO.setProductName(orderLine.getProductName());
        orderLineDTO.setQuantity(orderLine.getQuantity());
        orderLineDTO.setPrice(orderLine.getPrice());
        return orderLineDTO;
    }
}
