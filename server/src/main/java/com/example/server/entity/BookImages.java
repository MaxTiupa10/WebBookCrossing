package com.example.server.entity;

import com.fasterxml.jackson.annotation.JsonInclude;
import jakarta.persistence.*;


@Entity
@Table(name = "book_images")
@JsonInclude(JsonInclude.Include.NON_NULL)
public class BookImages {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long imageId;

    @ManyToOne
    @JoinColumn(name = "book_id")
    private Book book;

    @Lob
    private byte[] image;

    // getters and setters
}
