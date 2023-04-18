package no.ntnu.idata2306.group1.webshopbackend.controllers;

import com.stripe.exception.StripeException;
import com.stripe.model.checkout.Session;
import com.stripe.param.checkout.SessionCreateParams;
import no.ntnu.idata2306.group1.webshopbackend.dto.CartRequest;
import no.ntnu.idata2306.group1.webshopbackend.models.CartItem;
import no.ntnu.idata2306.group1.webshopbackend.models.Product;
import no.ntnu.idata2306.group1.webshopbackend.repositories.ProductRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.stream.Collectors;

@RestController
public class CheckoutController {

    @Autowired
    private ProductRepository productRepository;

    @PostMapping("/api/create-checkout-session")
    public ResponseEntity<Map<String, String>> createCheckoutSession(@RequestBody CartRequest cartRequest) {
        List<CartItem> cart = cartRequest.getCart();

        List<SessionCreateParams.LineItem> lineItems = cart.stream().map(item -> {
            Product product = productRepository.findById(item.getProductId()).orElse(null);
            if (product == null) {
                return null;
            }

            return SessionCreateParams.LineItem.builder()
                    .setQuantity(item.getQuantity().longValue())
                    .setPriceData(SessionCreateParams.LineItem.PriceData.builder()
                            .setCurrency("nok")
                            .setUnitAmount((long) (product.getPrice() * 100))
                            .setProductData(SessionCreateParams.LineItem.PriceData.ProductData.builder()
                                    .setName(product.getName())
                                    .build())
                            .build())
                    .build();
        }).filter(item -> item != null).collect(Collectors.toList());

        SessionCreateParams params = SessionCreateParams.builder()
                .addAllLineItem(lineItems)
                .addPaymentMethodType(SessionCreateParams.PaymentMethodType.CARD)
                .setMode(SessionCreateParams.Mode.PAYMENT)
                .setSuccessUrl("http://localhost:3000/profile/vieworders")
                .setCancelUrl("http://localhost:3000/shoppingcart")
                .build();

        try {
            Session session = Session.create(params);
            Map<String, String> responseData = new HashMap<>();
            responseData.put("url", session.getUrl());
            return ResponseEntity.ok(responseData);
        } catch (StripeException e) {
            e.printStackTrace();
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(null);
        }
    }
}
