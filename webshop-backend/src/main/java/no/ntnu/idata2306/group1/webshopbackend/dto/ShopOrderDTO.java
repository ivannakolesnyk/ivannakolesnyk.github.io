package no.ntnu.idata2306.group1.webshopbackend.dto;

import io.swagger.v3.oas.annotations.media.Schema;

import java.util.Date;
import java.util.List;

@Schema(description = "Data transfer object representing a shop order")
public class ShopOrderDTO {
    @Schema(description = "Unique identifier of the shop order", example = "1")
    private long id;

    @Schema(description = "Date when the order was placed", example = "2023-05-01T10:30:00")
    private Date order_date;

    @Schema(description = "Identifier of the user who placed the order", example = "2")
    private long user_id;

    @Schema(description = "Current status of the order", example = "Processing")
    private String status;

    @Schema(description = "List of order lines associated with the shop order")
    private List<OrderLineDTO> order_lines;

    @Schema(description = "Total price of the shop order", example = "99.98")
    private double total;

    @Schema(description = "Name of the user who placed the order", example = "John Doe")
    private String UserName;

    @Schema(description = "User profile information for the user who placed the order")
    private UserProfileDTO user;


    public ShopOrderDTO() {
    }

    public String getUserName() {
        return UserName;
    }

    public void setUserName(String userName) {
        this.UserName = userName;
    }

    public double getTotal() {
        return total;
    }

    public void setTotal(double total) {
        this.total = total;
    }

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public UserProfileDTO getUser() {
        return user;
    }

    public void setUser(UserProfileDTO user) {
        this.user = user;
    }

    public Date getOrder_date() {
        return order_date;
    }

    public void setOrder_date(Date order_date) {
        this.order_date = order_date;
    }

    public long getUser_id() {
        return user_id;
    }

    public void setUser_id(long user_id) {
        this.user_id = user_id;
    }

    public String getStatus() {
        return status;
    }

    public void setStatus(String status) {
        this.status = status;
    }

    public List<OrderLineDTO> getOrder_lines() {
        return order_lines;
    }

    public void setOrder_lines(List<OrderLineDTO> order_lines) {
        this.order_lines = order_lines;
    }
}

