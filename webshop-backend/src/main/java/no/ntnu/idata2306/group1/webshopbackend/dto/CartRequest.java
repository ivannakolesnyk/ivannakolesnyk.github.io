package no.ntnu.idata2306.group1.webshopbackend.dto;

import no.ntnu.idata2306.group1.webshopbackend.models.CartItem;

import java.util.List;

public class CartRequest {
    private List<CartItem> cart;
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
