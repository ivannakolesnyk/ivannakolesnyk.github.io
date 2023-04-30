package no.ntnu.idata2306.group1.webshopbackend.controllers;

import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.Parameter;
import io.swagger.v3.oas.annotations.media.Content;
import io.swagger.v3.oas.annotations.media.Schema;
import io.swagger.v3.oas.annotations.responses.ApiResponse;
import no.ntnu.idata2306.group1.webshopbackend.dto.OrderLineDTO;
import no.ntnu.idata2306.group1.webshopbackend.dto.ShopOrderDTO;
import no.ntnu.idata2306.group1.webshopbackend.models.OrderLine;
import no.ntnu.idata2306.group1.webshopbackend.models.ShopOrder;
import no.ntnu.idata2306.group1.webshopbackend.models.User;
import no.ntnu.idata2306.group1.webshopbackend.repositories.OrderLineRepository;
import no.ntnu.idata2306.group1.webshopbackend.repositories.ProductRepository;
import no.ntnu.idata2306.group1.webshopbackend.repositories.ShopOrderRepository;
import no.ntnu.idata2306.group1.webshopbackend.repositories.UserRepository;
import no.ntnu.idata2306.group1.webshopbackend.services.AccessUserService;
import no.ntnu.idata2306.group1.webshopbackend.utils.OrderLineMapper;
import no.ntnu.idata2306.group1.webshopbackend.utils.ShopOrderMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;
import java.util.Optional;
import java.util.stream.Collectors;

@RestController
public class ShopOrderController {

    @Autowired
    private ShopOrderRepository shopOrderRepository;

    @Autowired
    private OrderLineRepository orderLineRepository;

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private AccessUserService userService;

    @Autowired
    private ProductRepository productRepository;

    @Operation(summary = "Get all orders")
    @ApiResponse(responseCode = "200", description = "Orders fetched",
            content = {@Content(mediaType = "application/json", schema = @Schema(implementation = ShopOrderDTO.class))})
    @GetMapping("/api/orders")
    public ResponseEntity getOrders() {
        List<ShopOrder> shopOrders = this.shopOrderRepository.findAll();
        List<ShopOrderDTO> shopOrderDTOs = shopOrders.stream()
                .map(ShopOrderMapper::toShopOrderDTOWithUser)
                .collect(Collectors.toList());
        return new ResponseEntity(shopOrderDTOs, HttpStatus.OK);
    }

    @Operation(summary = "Get user's orders")
    @ApiResponse(responseCode = "200", description = "User's orders fetched",
            content = {@Content(mediaType = "application/json", schema = @Schema(implementation = ShopOrderDTO.class))})
    @GetMapping("/api/orders/{username}")
    public ResponseEntity getUsersOrders(
            @Parameter(description = "Username of the user")
            @PathVariable String username) {
        User sessionUser = userService.getSessionUser();
        if (sessionUser != null && sessionUser.getEmail().equals(username)) {
            List<ShopOrder> shopOrders = this.shopOrderRepository.findByUser(sessionUser);
            List<ShopOrderDTO> shopOrderDTOs = shopOrders.stream()
                    .map(shopOrder -> ShopOrderMapper.toShopOrderDTOWithTotal(shopOrder, this.orderLineRepository))
                    .collect(Collectors.toList());
            return new ResponseEntity(shopOrderDTOs, HttpStatus.OK);
        } else if (sessionUser == null) {
            return new ResponseEntity("Orders accessible only to authenticated users",
                    HttpStatus.UNAUTHORIZED);
        } else {
            return new ResponseEntity("Orders for other users not accessible!",
                    HttpStatus.FORBIDDEN);
        }
    }

    @Operation(summary = "Update order status")
    @ApiResponse(responseCode = "200", description = "Order status updated",
            content = {@Content(mediaType = "application/json", schema = @Schema(implementation = ShopOrder.class))})
    @PutMapping("/api/orders/{id}")
    public ResponseEntity<ShopOrder> updateOrderStatus(
            @Parameter(description = "ID of the order to be updated")
            @PathVariable Integer id, @RequestBody Map<String, String> statusMap) {
        User sessionUser = userService.getSessionUser();
        if (sessionUser != null && sessionUser.isAdmin()) {
            Optional<ShopOrder> optionalShopOrder = shopOrderRepository.findById(id);

            if (!optionalShopOrder.isPresent()) {
                return ResponseEntity.status(HttpStatus.NOT_FOUND).body(null);
            }

            ShopOrder shopOrder = optionalShopOrder.get();
            shopOrder.setStatus(statusMap.get("status"));
            ShopOrder updatedOrder = shopOrderRepository.save(shopOrder);
            return ResponseEntity.status(HttpStatus.OK).body(updatedOrder);

        } else if (sessionUser == null) {
            return new ResponseEntity("Orders accessible only to authenticated users",
                    HttpStatus.UNAUTHORIZED);
        } else {
            return new ResponseEntity("Orders can be modified only by admins",
                    HttpStatus.FORBIDDEN);
        }
    }

    @Operation(summary = "Get order lines by order ID")
    @ApiResponse(responseCode = "200", description = "Order lines fetched",
            content = {@Content(mediaType = "application/json", schema = @Schema(implementation = OrderLineDTO.class))})
    @GetMapping("/api/orders/orderlines/{orderid}")
    public ResponseEntity getOrderLines(
            @Parameter(description = "ID of the order")
            @PathVariable String orderid) {
        try {
            Integer parsedId = Integer.parseInt(orderid);
            Optional<ShopOrder> found = this.shopOrderRepository.findById(parsedId);
            if (found.isPresent()) {
                ShopOrder order = found.get();
                String email = order.getUser().getEmail();
                User sessionUser = userService.getSessionUser();
                if (sessionUser != null && sessionUser.getEmail().equals(email) || sessionUser.isAdmin()) {
                    List<OrderLine> orderLines = this.orderLineRepository.findByOrder(order);
                    List<OrderLineDTO> orderLineDTOs = orderLines.stream()
                            .map(OrderLineMapper::toOrderLineDTO)
                            .collect(Collectors.toList());
                    return new ResponseEntity(orderLineDTOs, HttpStatus.OK);
                } else if (sessionUser == null) {
                    return new ResponseEntity("Order lines accessible only to authenticated users",
                            HttpStatus.UNAUTHORIZED);
                } else {
                    return new ResponseEntity("Order lines for other users not accessible!",
                            HttpStatus.FORBIDDEN);
                }
            } else {
                return new ResponseEntity(HttpStatus.NOT_FOUND);
            }
        } catch (NumberFormatException e) {
            return new ResponseEntity(HttpStatus.BAD_REQUEST);
        }
    }

    @Operation(summary = "Delete an order")
    @ApiResponse(responseCode = "204", description = "Order deleted")
    @DeleteMapping("/api/orders/{id}")
    public ResponseEntity<Void> deleteOrder(
            @Parameter(description = "ID of the order to be deleted")
            @PathVariable Integer id) {
        User sessionUser = userService.getSessionUser();
        if (sessionUser != null && sessionUser.isAdmin()) {
            Optional<ShopOrder> optionalShopOrder = shopOrderRepository.findById(id);
            if (!optionalShopOrder.isPresent()) {
                return ResponseEntity.status(HttpStatus.NOT_FOUND).build();
            }

            ShopOrder shopOrder = optionalShopOrder.get();

            // Delete all order lines associated with the order
            List<OrderLine> orderLines = orderLineRepository.findByOrder(shopOrder);
            for (OrderLine orderLine : orderLines) {
                orderLineRepository.deleteById(orderLine.getId());
            }

            // Delete the order
            shopOrderRepository.deleteById(id);
            return ResponseEntity.status(HttpStatus.NO_CONTENT).build();
        } else if (sessionUser == null) {
            return new ResponseEntity("Orders accessible only to authenticated users",
                    HttpStatus.UNAUTHORIZED);
        } else {
            return new ResponseEntity("Orders can be deleted only by admins",
                    HttpStatus.FORBIDDEN);
        }
    }
}