package com.example.demo.service;

import com.example.demo.dto.OrderDto;
import com.example.demo.model.Order;
import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import com.example.demo.repository.OrderRepository;
import org.springframework.stereotype.Component;
@Component
public class OrderServiceImpl implements OrderService{
    @Autowired
    OrderRepository orderRepository;
    @Override
    public OrderDto getAllOrders(String orderNo) {
        Order order =orderRepository.findByOrderNo(orderNo);
        OrderDto orderDto=new OrderDto(); 
        System.out.println(order);
        BeanUtils.copyProperties(order,orderDto);
        return orderDto;
    }
    
}