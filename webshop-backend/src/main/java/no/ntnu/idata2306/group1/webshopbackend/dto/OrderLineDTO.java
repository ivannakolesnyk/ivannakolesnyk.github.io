package no.ntnu.idata2306.group1.webshopbackend.dto;

public class OrderLineDTO {
    private int product_id;
    private int quantity;
    private double price;

    public OrderLineDTO() {
    }

    public OrderLineDTO(int product_id, int quantity, double price) {
        this.product_id = product_id;
        this.quantity = quantity;
        this.price = price;
    }

    public int getProduct_id() {
        return product_id;
    }

    public int getQuantity() {
        return quantity;
    }

    public double getPrice() {
        return price;
    }

    public void setProduct_id(int product_id) {
        this.product_id = product_id;
    }

    public void setQuantity(int quantity) {
        this.quantity = quantity;
    }

    public void setPrice(double price) {
        this.price = price;
    }
}

