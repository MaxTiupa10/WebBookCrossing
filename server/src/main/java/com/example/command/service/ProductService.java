package com.example.command.service;

import com.example.command.dto.item.ColorAndIdDto;
import com.example.command.dto.item.ItemDto;
import com.example.command.entity.Review;
import com.example.command.repository.ProductRepository;
import com.example.command.entity.Product;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;

import java.util.*;
import java.util.stream.Collectors;


// сервіс в якому витягуються і додаються дані в бд
@Service
public class ProductService {
    @Autowired
    private ProductRepository productRepository;

    public Product saveProduct(Product product){
        return productRepository.save(product);
    }

    public Page<Product> productsPagination(int page, int limit, String sortDirection, String sortBy, Integer minPrice, Integer maxPrice, String productName) {
        Pageable pageable = PageRequest.of(page, limit, getSort(sortDirection, sortBy));
        if (minPrice != null && maxPrice != null) {
            if (productName != null && !productName.isEmpty()) {
                return productRepository.findByProductNameContainingIgnoreCaseAndProductPriceBetween(productName.toLowerCase(), minPrice, maxPrice + 1, (PageRequest) pageable);
            } else {
                return productRepository.findByProductPriceBetween(minPrice, maxPrice + 1, (PageRequest) pageable);
            }
        } else if (productName != null && !productName.isEmpty()) {
            return productRepository.findByProductNameContainingIgnoreCase(productName.toLowerCase(), (PageRequest) pageable);
        } else {
            return productRepository.findAll(pageable);
        }
    }

    private Sort getSort(String sortDirection, String sortBy) {
        Sort.Direction direction = sortDirection != null && sortDirection.equalsIgnoreCase("desc") ? Sort.Direction.DESC : Sort.Direction.ASC;
        if (sortBy != null && !sortBy.isEmpty()) {
            return Sort.by(direction, sortBy);
        }
        return Sort.by(direction, "id"); // Default sorting by ID
    }

    public ItemDto getById(String id) {
        Product product = productRepository.findByProductId(id);
        return convertToItem(product);
    }

    // перетворення для для окремого товару
    private ItemDto convertToItem(Product product){
        ItemDto itemDto = new ItemDto();

        itemDto.setProductId(product.getProductId());
        itemDto.setProductName(product.getProductName());
        itemDto.setProductDescription(product.getProductDescription());
        itemDto.setProductPrice(product.getProductPrice());
        itemDto.setImages(product.getImages());
        itemDto.setProductCategory(product.getProductCategory());
        itemDto.setProductSku(product.getProductSku());
//        itemDto.setProductReviews(product.getProductReviews());


        List<Product> sameProducts = productRepository.findAllByProductName(product.getProductName());

        Set<ColorAndIdDto> set = new HashSet<>();
        sameProducts.forEach(x -> set.add(new ColorAndIdDto(x.getProductColor(),x.getProductId())));


        List<ColorAndIdDto> colorAndIdDto = new ArrayList<>();

        sameProducts.forEach(x -> colorAndIdDto.add(new ColorAndIdDto(x.getProductColor(),x.getProductId())));



        itemDto.setProductColors(set.stream().toList());

//        List<Review> reviews = product.getProductReviews();
//
//        int sumReview = 0;
//        for(Review r : reviews ){
//            sumReview += r.getRate();
//        }
//        itemDto.setAmountOfReviews(reviews.size());
//        itemDto.setAverageRate(sumReview/ reviews.size());
        itemDto.setAverageRate(4);



        return itemDto;
    }


    // Перетворення продукту до потрібного типу json для сторінки
    private Product convertToCustomProduct(Product product) {
        Product customProduct = new Product();
        customProduct.setProductId(product.getProductId());
        customProduct.setProductName(product.getProductName());

        //Список із одного першого фото
        customProduct.setImages(List.of(product.getImages().get(0)));

        customProduct.setProductPrice(product.getProductPrice());
        customProduct.setProductCategory(product.getProductCategory());
        return customProduct;
    }

}
