package no.ntnu.idata2306.group1.webshopbackend.models;

public class CartItem {
    private Integer productId;
    private Integer quantity;

    public CartItem() {
    }

    public CartItem(Integer productId, Integer quantity) {
        this.productId = productId;
        this.quantity = quantity;
    }

    public Integer getProductId() {
        return productId;
    }

    public Integer getQuantity() {
        return quantity;
    }

    public void setProductId(Integer productId) {
        this.productId = productId;
    }

    public void setQuantity(Integer quantity) {
        this.quantity = quantity;
    }
}