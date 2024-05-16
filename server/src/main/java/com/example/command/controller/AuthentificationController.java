package com.example.command.controller;

import com.example.command.entity.User;
import com.example.command.service.AuthenticationService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import com.example.command.service.UserService;

@RestController
@RequestMapping("/api/auth")
@RequiredArgsConstructor
public class AuthentificationController {

    private final AuthenticationService service;






    @PostMapping("/registration")
    public ResponseEntity<AuthentificationResponce> register(
            @RequestBody RegisterRequest request){

        return ResponseEntity.ok(service.register(request));
    }

    @PostMapping("/login")
    public ResponseEntity<AuthentificationResponce> authenticate(
            @RequestBody AuthentificationRequest request){
        return ResponseEntity.ok(service.authenticate(request));
    }

}
