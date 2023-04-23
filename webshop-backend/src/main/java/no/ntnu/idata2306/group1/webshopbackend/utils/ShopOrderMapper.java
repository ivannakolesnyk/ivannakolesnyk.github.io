package no.ntnu.idata2306.group1.webshopbackend.utils;

import no.ntnu.idata2306.group1.webshopbackend.dto.ShopOrderDTO;
import no.ntnu.idata2306.group1.webshopbackend.dto.UserProfileDTO;
import no.ntnu.idata2306.group1.webshopbackend.models.OrderLine;
import no.ntnu.idata2306.group1.webshopbackend.models.ShopOrder;
import no.ntnu.idata2306.group1.webshopbackend.models.User;
import no.ntnu.idata2306.group1.webshopbackend.repositories.OrderLineRepository;

import java.util.List;

/**
 * A utility class for mapping between {@link ShopOrder} and {@link ShopOrderDTO}.
 * The class provides methods to convert ShopOrder objects to ShopOrderDTO objects,
 * and vice versa, with or without user information.
 */
public final class ShopOrderMapper {

    /**
     * Private constructor to prevent instantiation.
     */
    private ShopOrderMapper() {
    }

    /**
     * Converts a {@link ShopOrder} object to a {@link ShopOrderDTO} object,
     * including order lines and total price calculation.
     *
     * @param shopOrder           the ShopOrder object to be converted
     * @param orderLineRepository the OrderLineRepository object
     * @return a ShopOrderDTO object with order lines and total price
     */
    public static ShopOrderDTO toShopOrderDTOWithTotal(ShopOrder shopOrder, OrderLineRepository orderLineRepository) {
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

    /**
     * Converts a {@link ShopOrder} object to a {@link ShopOrderDTO} object,
     * including user information.
     *
     * @param shopOrder the ShopOrder object to be converted
     * @return a ShopOrderDTO object with user information
     */
    public static ShopOrderDTO toShopOrderDTOWithUser(ShopOrder shopOrder) {
        // Convert User to UserDTO
        User user = shopOrder.getUser();
        UserProfileDTO userDTO = new UserProfileDTO();
        userDTO.setId(user.getId());
        userDTO.setName(user.getName());

        // Convert ShopOrder to ShopOrderDTO
        ShopOrderDTO shopOrderDTO = new ShopOrderDTO();
        shopOrderDTO.setId(shopOrder.getId());
        shopOrderDTO.setOrder_date(shopOrder.getOrderDate());
        shopOrderDTO.setStatus(shopOrder.getStatus());

        // Set the UserProfileDTO object
        shopOrderDTO.setUser(userDTO);

        return shopOrderDTO;
    }
}
