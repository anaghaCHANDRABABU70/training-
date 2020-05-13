package com.example.demo.model;

import java.time.LocalDateTime;

import javax.validation.constraints.AssertFalse.List;

import org.springframework.data.mongodb.core.aggregation.VariableOperators.Map;
import org.springframework.data.mongodb.core.mapping.Document;

import lombok.Data;

@Document(collection = "orders")
@Data
public class Order {

    private String orderNo;

    private LocalDateTime orderDate;

    private String customerName;

    private String customerEmail;

    private List  lineItems;

    private Map priceInfo;

    private List shipments;
}
    
