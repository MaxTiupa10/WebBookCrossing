package com.example.server.entity;

import com.fasterxml.jackson.annotation.JsonInclude;
import jakarta.persistence.*;


@Entity
@Table(name = "books")
@JsonInclude(JsonInclude.Include.NON_NULL)
public class Book {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long bookId;

    private String bookName;
    private String bookAuthor;
    private String bookDescription;


    @JoinColumn(name = "user_id")
    private Long userId;


    @Override
    public String toString() {
        return "{bookId=" + bookId +
                ",\n bookName='" + bookName + '\'' +
                ",\n bookAuthor='" + bookAuthor + '\'' +
                ",\n bookDescription='" + bookDescription + '\'' +
                ",\n userId=" + userId +
                '}';
    }

    // Конструктор без аргументів (потрібний для JPA)
    public Book() {
    }

    public Book(String bookName, String bookAuthor, String bookDescription, Long userId) {
        this.bookName = bookName;
        this.bookAuthor = bookAuthor;
        this.bookDescription = bookDescription;
        this.userId = userId;
    }

    // Геттери та сеттери
    // ...
}
