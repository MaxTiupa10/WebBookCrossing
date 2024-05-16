package com.example.command.mapper;

import com.example.command.dto.UserDto;
import com.example.command.entity.User;
import org.springframework.stereotype.Component;

// клас для перетоврення dto в простий об'єкт і на оборот
@Component
public class UserMapper {

    public User toUser(UserDto userDto){
        User user = new User();

        user.setUserId(userDto.getUserId());
        user.setFirstname(userDto.getFirstname());
        user.setLastname(userDto.getLastname());
        user.setEmail(userDto.getEmail());
        user.setPassword(userDto.getPassword());
        user.setRole(userDto.getRole());
        return user;
    }

    public UserDto toUserDto(User user){
        UserDto userDto = new UserDto();

        userDto.setUserId(user.getUserId());
        userDto.setFirstname(user.getFirstname());
        userDto.setLastname(user.getLastname());
        userDto.setEmail(user.getEmail());
        userDto.setPassword(user.getPassword());
        userDto.setRole(user.getRole());
        return userDto;
    }

}

