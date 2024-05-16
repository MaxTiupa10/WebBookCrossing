package com.example.command.controller;

import com.example.command.dto.item.ItemDto;
import com.example.command.entity.Product;
import com.example.command.dto.ProductDto;
import com.example.command.mapper.ProductMapper;
import com.example.command.service.ProductService;

import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("api/products")
@RequiredArgsConstructor
public class ProductController {

    // сервіс для роботи з бд
    private final ProductService productService;

    // мапер для перетворення даних
    private final ProductMapper productMapper;


    // Додавання даних до бд
    @PostMapping("/add")
    public ProductDto createProduct(@RequestBody ProductDto productDto) {
        Product product = productMapper.toProduct(productDto);
        return productMapper.toProductDto(productService.saveProduct(product));
    }

    @GetMapping("/say")
    public String say() {
        return "hello";
    }

    //пагінація для сторінки із всім товаром
    //треба доробити пошук за параметром    //swager
    //робочий приклад http://localhost:8080/api/products/shop?_page=2&_limit=3&_sort=someType
    //http://localhost:8080/api/products/shop?page=2&limit=3&sort=someType&sortBy=price&minPrice=0&maxPrice=1000000
    @GetMapping("/shop")
    public ResponseEntity<Page<Product>> getAllWithPagination(
            @RequestParam(name = "page", defaultValue = "0") int page,
            @RequestParam(name = "limit", defaultValue = "8") int limit,
            @RequestParam(name = "sort", defaultValue = "asc") String sort,
            @RequestParam(name = "sortBy", required = false) String sortBy,
            @RequestParam(name = "minPrice",defaultValue = "0") Integer minPrice,
            @RequestParam(name = "maxPrice", required = false) Integer maxPrice,
            @RequestParam(name = "search", required = false) String search) {

        Page<Product> product = productService.productsPagination(page, limit, sort, sortBy, minPrice, maxPrice, search);
        return new ResponseEntity<>(product, HttpStatus.OK);
    }



    // Витягнути один товар по айді
    @GetMapping("/item/{productId}")
    public ResponseEntity<ItemDto> getById(@PathVariable String productId) {

        ItemDto itemDto = productService.getById(productId);
        return new ResponseEntity<>(itemDto, HttpStatus.OK);
    }

}

