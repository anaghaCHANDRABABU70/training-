package com.example.demo.facade;
import com.example.demo.dto.OrderDto;
import com.example.demo.service.OrderService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
@Component
public class OrderFacadeImpI implements OrderFacade {
    @Autowired
    OrderService orderService;
    @Override
    public OrderDto getAllOrders(String orderNo){
        System.out.println("order kkkk");
        return orderService.getAllOrders(orderNo);
        


    }
    
}