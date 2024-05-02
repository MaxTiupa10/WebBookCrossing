package com.example.server.service;

import com.example.server.entity.Book;
import com.example.server.repository.BookRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class BookService {


    private final BookRepository bookRepository;

    @Autowired
    public BookService(BookRepository bookRepository){
        this.bookRepository = bookRepository;
    }


    public Book findBookWithImagesAndUserById(Long bookId) {
        return bookRepository.findBookWithImagesAndUserById(bookId);
    }
}