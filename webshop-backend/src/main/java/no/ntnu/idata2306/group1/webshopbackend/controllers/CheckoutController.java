package no.ntnu.idata2306.group1.webshopbackend.controllers;

import com.google.gson.JsonSyntaxException;
import com.stripe.exception.SignatureVerificationException;
import com.stripe.exception.StripeException;
import com.stripe.model.Event;
import com.stripe.model.checkout.Session;
import com.stripe.net.Webhook;
import com.stripe.param.checkout.SessionCreateParams;
import jakarta.servlet.http.HttpServletRequest;
import no.ntnu.idata2306.group1.webshopbackend.dto.CartRequest;
import no.ntnu.idata2306.group1.webshopbackend.models.*;
import no.ntnu.idata2306.group1.webshopbackend.repositories.OrderLineRepository;
import no.ntnu.idata2306.group1.webshopbackend.repositories.ProductRepository;
import no.ntnu.idata2306.group1.webshopbackend.repositories.ShopOrderRepository;
import no.ntnu.idata2306.group1.webshopbackend.repositories.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import java.util.*;
import java.util.stream.Collectors;

/**
 * CheckoutController is a REST controller that handles requests to create
 * checkout sessions and manage Stripe webhooks.
 *
 * @author Mark
 */
@RestController
public class CheckoutController {

    private static final String STRIPE_WEBHOOK_SECRET = "whsec_ae49e0485ed5e7850ef2111680449350829e29c4eb5ba80fb8a373a9a8b270f8";
    @Autowired
    private ProductRepository productRepository;
    @Autowired
    private UserRepository userRepository;
    @Autowired
    private ShopOrderRepository shopOrderRepository;
    @Autowired
    private OrderLineRepository orderLineRepository;
    private String sessionId;

    /**
     * Creates a checkout session based on the given cart items and user ID.
     *
     * @param cartRequest the request object containing cart items and user ID
     * @return the checkout session URL
     */
    @PostMapping("/api/create-checkout-session")
    public ResponseEntity<Map<String, String>> createCheckoutSession(@RequestBody CartRequest cartRequest) {
        List<CartItem> cart = cartRequest.getCart();
        String userId = cartRequest.getUserId();
        List<SessionCreateParams.LineItem> lineItems = cart.stream().map(item -> {
            Product product = productRepository.findById(item.getProductId()).orElse(null);
            if (product == null) {
                return null;
            }

            return SessionCreateParams.LineItem.builder().setQuantity(item.getQuantity().longValue()).setPriceData(SessionCreateParams.LineItem.PriceData.builder().setCurrency("nok").setUnitAmount((long) (product.getPrice() * 100)).setProductData(SessionCreateParams.LineItem.PriceData.ProductData.builder().setName(product.getName()).build()).build()).build();
        }).filter(item -> item != null).collect(Collectors.toList());

        SessionCreateParams.Builder paramsBuilder = SessionCreateParams.builder().addAllLineItem(lineItems).addPaymentMethodType(SessionCreateParams.PaymentMethodType.CARD).setMode(SessionCreateParams.Mode.PAYMENT).setSuccessUrl("http://localhost:3000/profile/vieworders").setCancelUrl("http://localhost:3000/shoppingcart").putMetadata("user_id", String.valueOf(userId));

        // Add the product IDs and quantities to the metadata
        for (int i = 0; i < cart.size(); i++) {
            CartItem item = cart.get(i);
            paramsBuilder.putMetadata("product_" + (i + 1), item.getProductId() + "," + item.getQuantity());
        }

        SessionCreateParams params = paramsBuilder.build();


        try {
            Session session = Session.create(params);
            Map<String, String> responseData = new HashMap<>();
            responseData.put("url", session.getUrl());
            // Save the session id in order to retrieve on session completion
            this.sessionId = session.getId();
            return ResponseEntity.ok(responseData);
        } catch (StripeException e) {
            e.printStackTrace();
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(null);
        }
    }
}
