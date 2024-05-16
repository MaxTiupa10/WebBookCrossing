package com.example.command.dto;

import com.example.command.entity.Image;
import com.example.command.entity.Review;
import com.fasterxml.jackson.annotation.JsonInclude;
import lombok.Getter;
import lombok.Setter;

import java.util.List;


// клас який ми приймаємо з форнтенду і відправляємо назад
@Getter
@Setter
// якщо значення не встановлено то поле не буде додаватися в json
@JsonInclude(JsonInclude.Include.NON_EMPTY)
public class ProductDto {
    private String productId;
    private String productName;
    private String productDescription;
    private Integer productPrice;
    private List<Image> images;
    private String productCategory;
    private String productSku;
    private String productColor;
//    private List<Review> productReviews;
}
