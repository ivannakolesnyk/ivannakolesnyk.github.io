package no.ntnu.idata2306.group1.webshopbackend.dto;

import io.swagger.v3.oas.annotations.media.Schema;
import no.ntnu.idata2306.group1.webshopbackend.models.CartItem;

import java.util.List;

@Schema(description = "Represents a cart request with a list of cart items and user ID")
public class CartRequest {
    @Schema(description = "A list of cart items")
    private List<CartItem> cart;

    @Schema(description = "The user ID associated with the cart")
    private String userId;

    public CartRequest() {
    }

    public CartRequest(List<CartItem> cart, String userId) {
        this.cart = cart;
        this.userId = userId;
    }

    public List<CartItem> getCart() {
        return cart;
    }

    public String getUserId() {
        return userId;
    }

    public void setCart(List<CartItem> cart) {
        this.cart = cart;
    }

    public void setUserId(String userId) {
        this.userId = userId;
    }
}
