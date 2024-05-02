package com.example.server.repository;

import java.util.Optional;

import com.example.server.entity.Book;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

@Repository
public interface BookRepository extends JpaRepository<Book, Long> {
    @Query("SELECT b FROM Book b " +
            "LEFT JOIN BookImages bi ON b.bookId = bi.book.bookId " +
            "WHERE b.bookId = 1")
    Book findBookWithImagesAndUserById(@Param("bookId") Long bookId);
}