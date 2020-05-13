package com.example.demo.model;

import java.time.LocalDateTime;

import org.springframework.data.mongodb.core.mapping.Document;

import lombok.Data;

@Document(collection = "orders")
@Data
public class Order {
    String orderNo;
    LocalDateTime orderdate;
    String siteld;
    String customerName;
    String orderStatus;
    Double lineItems;
    Double shipments; 
    
}