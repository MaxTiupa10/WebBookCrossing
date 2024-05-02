package com.example.server.controller;


import com.example.server.service.BookService;
import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import com.example.server.entity.Book;


@RestController
@RequestMapping(path = "api/book")
public class BookController {
    private final BookService bookService;

    @Autowired
    public BookController(BookService bookService){
        this.bookService = bookService;
    }


    @GetMapping("say")
    public String sayHello(){
        return "Hello";
    }

    @GetMapping("/item/{bookId}")
    public ResponseEntity<String> getBookWithImagesAndUser(@PathVariable Long bookId) throws JsonProcessingException {
        Book book = bookService.findBookWithImagesAndUserById(bookId);
        return ResponseEntity.ok().body(book.toString());
    }



}
