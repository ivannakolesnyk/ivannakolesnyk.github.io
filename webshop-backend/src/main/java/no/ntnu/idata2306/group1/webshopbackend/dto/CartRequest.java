package no.ntnu.idata2306.group1.webshopbackend.dto;

import no.ntnu.idata2306.group1.webshopbackend.models.CartItem;

import java.util.List;

public class CartRequest {
    private List<CartItem> cart;

    public CartRequest() {
    }

    public CartRequest(List<CartItem> cart) {
        this.cart = cart;
    }

    public List<CartItem> getCart() {
        return cart;
    }

    public void setCart(List<CartItem> cart) {
        this.cart = cart;
    }
}
