package com.example.demo.model;

import lombok.Data;

@Data
public class Price {
    String merchandizeTotal;
    String shipmentId;
    Double tax;
    String priceAdjustments;
    
}