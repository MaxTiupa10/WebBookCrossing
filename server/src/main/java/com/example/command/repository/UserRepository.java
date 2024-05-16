package com.example.command.repository;

import com.example.command.entity.User;
import org.bson.types.ObjectId;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

// інтерфейс для взаємодії з бд
@Repository
public interface UserRepository extends MongoRepository<User, ObjectId>  {

    Optional<User> findByEmail(String email);

    User getUserByUserId(String id);

}
