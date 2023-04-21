package no.ntnu.idata2306.group1.webshopbackend.dto;

import java.util.Date;
import java.util.List;

public class ShopOrderDTO {
    private long id;
    private Date order_date;
    private long user_id;
    private String status;
    private List<OrderLineDTO> order_lines;
    private double total;
    private String UserName;
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

