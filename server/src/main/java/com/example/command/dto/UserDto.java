package com.example.command.dto;

import com.example.command.UserSecurity.Role;
import com.fasterxml.jackson.annotation.JsonInclude;
import lombok.Getter;
import lombok.Setter;

import javax.persistence.EnumType;
import javax.persistence.Enumerated;

// клас для отримання даних про користувача з фронтенду
@Getter
@Setter
@JsonInclude(JsonInclude.Include.NON_EMPTY)
public class UserDto {
    private String userId;
    private String password;
    private String firstname;
    private String lastname;
    private String email;

    @Enumerated(EnumType.STRING)
    private Role role;
}
