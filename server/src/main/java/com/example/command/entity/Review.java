package com.example.command.entity;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class Review {
    private String userId;
    private String massage;
    private Integer rate;
}
