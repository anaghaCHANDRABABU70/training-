package com.example.demo.controller;

import com.example.demo.facade.OrderFacade;
import com.example.demo.dto.OrderDto;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
@RestController
@RequestMapping("/api/v1/orders")
public class OrderController {
 @Autowired
  OrderFacade orderFacade;
 @GetMapping("/")
 public OrderDto getAllOrders(@RequestParam("orderNo") String orderNo)
 {
     return orderFacade.getAllOrders(orderNo);
 }
 
}