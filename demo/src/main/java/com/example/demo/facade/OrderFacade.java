package com.example.demo.facade;
import com.example.demo.dto.OrderDto;
public interface OrderFacade{
    OrderDto getAllOrders(String orderNo);
}
