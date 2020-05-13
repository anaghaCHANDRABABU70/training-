package com.example.demo.dto;

import java.time.LocalDateTime;

public class OrderDto extends PriceDto {
    String orderNo;
    LocalDateTime orderdate;
    String siteld;
    String customerName;
    String orderStatus;
    Double lineItems;
    Double shipments;
	public void add(OrderDto orderDto) {
	}
    
    
}