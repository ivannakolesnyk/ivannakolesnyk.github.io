package no.ntnu.idata2306.group1.webshopbackend.controllers;

import no.ntnu.idata2306.group1.webshopbackend.dto.OrderLineDTO;
import no.ntnu.idata2306.group1.webshopbackend.dto.ShopOrderDTO;
import no.ntnu.idata2306.group1.webshopbackend.models.OrderLine;
import no.ntnu.idata2306.group1.webshopbackend.models.Product;
import no.ntnu.idata2306.group1.webshopbackend.models.ShopOrder;
import no.ntnu.idata2306.group1.webshopbackend.models.User;
import no.ntnu.idata2306.group1.webshopbackend.repositories.OrderLineRepository;
import no.ntnu.idata2306.group1.webshopbackend.repositories.ProductRepository;
import no.ntnu.idata2306.group1.webshopbackend.repositories.ShopOrderRepository;
import no.ntnu.idata2306.group1.webshopbackend.repositories.UserRepository;
import no.ntnu.idata2306.group1.webshopbackend.services.AccessUserService;
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

    @PostMapping("/api/orders")
    public ResponseEntity<ShopOrder> createOrder(@RequestBody ShopOrderDTO shopOrderDTO) {
        User user = userRepository.findById(shopOrderDTO.getUser_id()).orElse(null);
        if (user == null) {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(null);
        }

        ShopOrder shopOrder = new ShopOrder(shopOrderDTO.getOrder_date(), user, shopOrderDTO.getStatus());
        ShopOrder savedOrder = shopOrderRepository.save(shopOrder);

        for (OrderLineDTO orderLineDTO : shopOrderDTO.getOrder_lines()) {
            Product product = productRepository.findById(orderLineDTO.getProduct_id()).orElse(null);
            if (product == null) {
                return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(null);
            }

            OrderLine orderLine = new OrderLine(savedOrder, product, orderLineDTO.getQuantity(), orderLineDTO.getPrice());
            orderLineRepository.save(orderLine);
        }

        return ResponseEntity.status(HttpStatus.CREATED).body(savedOrder);
    }

    @GetMapping("/api/orders")
    public ResponseEntity getOrders() {
        List<ShopOrder> shopOrders = this.shopOrderRepository.findAll();
        List<ShopOrderDTO> shopOrderDTOs = shopOrders.stream()
                .map(ShopOrderMapper::toShopOrderDTOWithUser)
                .collect(Collectors.toList());
        return new ResponseEntity(shopOrderDTOs, HttpStatus.OK);
    }

    @GetMapping("/api/orders/{username}")
    public ResponseEntity getUsersOrders(@PathVariable String username) {
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

    @PutMapping("/api/orders/{id}")
    public ResponseEntity<ShopOrder> updateOrderStatus(@PathVariable Integer id, @RequestBody Map<String, String> statusMap) {
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


    @GetMapping("/api/orders/orderlines/{orderid}")
    public ResponseEntity getOrderLines(@PathVariable String orderid) {
        try {
            Integer parsedId = Integer.parseInt(orderid);
            Optional<ShopOrder> found = this.shopOrderRepository.findById(parsedId);
            if (found.isPresent()) {
                ShopOrder order = found.get();
                String email = order.getUser().getEmail();
                User sessionUser = userService.getSessionUser();
                if (sessionUser != null && sessionUser.getEmail().equals(email)) {
                    return new ResponseEntity(this.orderLineRepository.findByOrder(order),
                            HttpStatus.OK);
                } else if (sessionUser.isAdmin()) {
                    return new ResponseEntity(this.orderLineRepository.findByOrder(order),
                            HttpStatus.OK);
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

    @DeleteMapping("/api/orders/{id}")
    public ResponseEntity<Void> deleteOrder(@PathVariable Integer id) {
        User sessionUser = userService.getSessionUser();
        if (sessionUser != null && sessionUser.isAdmin()) {
            Optional<ShopOrder> optionalShopOrder = shopOrderRepository.findById(id);

            if (!optionalShopOrder.isPresent()) {
                return ResponseEntity.status(HttpStatus.NOT_FOUND).build();
            }

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

