package no.ntnu.idata2306.group1.webshopbackend.models;

import io.swagger.v3.oas.annotations.media.Schema;

@Schema(description = "Represents an item in the shopping cart")
public class CartItem {
    @Schema(description = "The product ID of the cart item")
    private Integer productId;

    @Schema(description = "The quantity of the product in the cart")
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
