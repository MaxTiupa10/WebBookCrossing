package com.example.command.repository;

import com.example.command.entity.Product;
import org.bson.types.ObjectId;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

// інтерфейс для взаємодії з бд
@Repository
public interface ProductRepository extends MongoRepository<Product, ObjectId> {
    Product findByProductId(String id);
    List<Product> findAllByProductName(String name);

    Page<Product> findByProductNameContainingIgnoreCaseAndProductPriceBetween(String lowerCase, Integer minPrice, int i, PageRequest of);

    Page<Product> findByProductNameContainingIgnoreCase(String lowerCase, PageRequest of);

    Page<Product> findByProductPriceBetween(Integer minPrice, int i, PageRequest of);
}
