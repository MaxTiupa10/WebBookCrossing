package com.example.command.mapper;

import com.example.command.entity.Product;
import com.example.command.dto.ProductDto;
import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.springframework.stereotype.Component;

import java.util.Map;

// клас для перетоврення dto в простий об'єкт і на оборот
@Component
public class ProductMapper {
    public ProductDto toProductDto(Product product) {
        ProductDto productDto = new ProductDto();

        productDto.setProductId(product.getProductId());
        productDto.setProductName(product.getProductName());
        productDto.setProductDescription(product.getProductDescription());
        productDto.setProductPrice(product.getProductPrice());

        productDto.setImages(product.getImages());


        productDto.setProductCategory(product.getProductCategory());
        productDto.setProductSku(product.getProductSku());
        productDto.setProductColor(product.getProductColor());
//        productDto.setProductReviews(product.getProductReviews());

        return productDto;
    }


    public Product toProduct(ProductDto productDto) {
        Product product = new Product();

        product.setProductId(productDto.getProductId());
        product.setProductName(productDto.getProductName());
        product.setProductDescription(productDto.getProductDescription());
        product.setProductPrice(productDto.getProductPrice());

        product.setImages(productDto.getImages());

        product.setProductCategory(productDto.getProductCategory());
        product.setProductSku(productDto.getProductSku());
        product.setProductColor(productDto.getProductColor());
//        product.setProductReviews(productDto.getProductReviews());

        return product;
    }

}
