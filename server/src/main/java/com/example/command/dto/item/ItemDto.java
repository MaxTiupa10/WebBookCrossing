package com.example.command.dto.item;

import com.example.command.entity.Image;
import com.example.command.entity.Review;
import lombok.Getter;
import lombok.Setter;

import java.util.List;


// клас який повертається при застосуванні методу пошук за айді в продакт контролері
@Getter
@Setter
public class ItemDto {
    private String productId;
    private String productName;
    private String productDescription;
    private Integer productPrice;
    private List<Image> images;
    private String productCategory;
    private String productSku;
    private List<ColorAndIdDto> productColors;
    private List<Review> productReviews;
    private Integer amountOfReviews;
    private Integer averageRate;

}
