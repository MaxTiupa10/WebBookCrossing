package com.example.command.service;

import com.example.command.entity.Product;
import com.example.command.entity.User;
import com.example.command.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

// сервіс в якому витягуються і додаються дані в бд

@Service
public class UserService {

    @Autowired
    private UserRepository userRepository;

// зберігаємо юзера
    public User saveUser(User user){
        return userRepository.save(user);
    }

    public User getUserById(String id) {
        return userRepository.getUserByUserId(id);
    }
}
