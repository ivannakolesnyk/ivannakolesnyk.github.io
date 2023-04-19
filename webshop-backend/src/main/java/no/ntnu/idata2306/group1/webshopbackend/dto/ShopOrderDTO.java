package no.ntnu.idata2306.group1.webshopbackend.dto;

import java.util.Date;
import java.util.List;

public class ShopOrderDTO {
    private Date order_date;
    private long user_id;
    private String status;
    private List<OrderLineDTO> order_lines;

    public ShopOrderDTO() {
    }

    public ShopOrderDTO(Date order_date, long user_id, String status, List<OrderLineDTO> order_lines) {
        this.order_date = order_date;
        this.user_id = user_id;
        this.status = status;
        this.order_lines = order_lines;
    }

    public Date getOrder_date() {
        return order_date;
    }

    public long getUser_id() {
        return user_id;
    }

    public String getStatus() {
        return status;
    }

    public List<OrderLineDTO> getOrder_lines() {
        return order_lines;
    }

    public void setOrder_date(Date order_date) {
        this.order_date = order_date;
    }

    public void setUser_id(long user_id) {
        this.user_id = user_id;
    }

    public void setStatus(String status) {
        this.status = status;
    }

    public void setOrder_lines(List<OrderLineDTO> order_lines) {
        this.order_lines = order_lines;
    }
}

