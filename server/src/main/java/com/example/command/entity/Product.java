package com.example.command.entity;

import com.fasterxml.jackson.annotation.JsonInclude;
import lombok.Data;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.util.List;


//головний клас з продуктами яким ми оперуємо в прорамі в в бд
@Document(collection = "products")
@Data
@JsonInclude(JsonInclude.Include.NON_NULL)
public class Product {

    @Id
    private String productId;
    private String productName;
    private String productDescription;
    private Integer productPrice;
    private List<Image> images;
    private String productCategory;
    private String productSku;
    private String productColor;
    private List<Review> productReviews;

}
