package no.ntnu.idata2306.group1.webshopbackend.dto;

import io.swagger.v3.oas.annotations.media.Schema;

@Schema(description = "Data transfer object representing an order line")
public class OrderLineDTO {
    @Schema(description = "Unique identifier of the order line", example = "1")
    private int id;

    @Schema(description = "Product name of the order line", example = "Coffee master 3000")
    private String productName;

    @Schema(description = "Quantity of the product in the order line", example = "2")
    private int quantity;

    @Schema(description = "Price of the product in the order line", example = "49.99")
    private double price;

    public OrderLineDTO() {
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getProductName() {
        return productName;
    }

    public void setProductName(String productName) {
        this.productName = productName;
    }

    public int getQuantity() {
        return quantity;
    }

    public void setQuantity(int quantity) {
        this.quantity = quantity;
    }

    public double getPrice() {
        return price;
    }

    public void setPrice(double price) {
        this.price = price;
    }
}

