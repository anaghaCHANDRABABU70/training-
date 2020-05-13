package com.example.demo.repository;
import org.springframework.data.mongodb.repository.MongoRepository;
import com.example.demo.model.Order;
public interface OrderRepository extends MongoRepository<Order,String> {
	Order findByOrderNo(String orderNo);
    
}