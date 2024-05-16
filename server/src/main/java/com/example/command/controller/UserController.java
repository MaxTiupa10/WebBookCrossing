package com.example.command.controller;

import com.example.command.dto.UserDto;
import com.example.command.entity.User;
import com.example.command.mapper.UserMapper;
import com.example.command.service.UserService;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("api/user")
@RequiredArgsConstructor
public class UserController {

    @Autowired
    private UserService userService;
    @Autowired
    private UserMapper userMapper;

// Додати юзера в бд
    @PostMapping("/add")
    public UserDto addUser(@RequestBody UserDto userDto){
        User user = userMapper.toUser(userDto);
        return userMapper.toUserDto(userService.saveUser(user));
    }
    // Отримати юзера по ID
    @GetMapping("/{id}")
    public UserDto getUserById(@PathVariable String id) {
        User user = userService.getUserById(id);
        return userMapper.toUserDto(user);
    }

}
