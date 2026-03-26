package com.lifeinsurance.core.controller;

import com.lifeinsurance.core.service.AuthService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Map;

@RestController
@RequestMapping("/api/auth")
public class AuthController {

    @Autowired
    private AuthService authService;

    @PostMapping("/login")
    public ResponseEntity<?> login(@RequestBody Map<String, String> credentials) {
        String userId = credentials.get("userId");
        String password = credentials.get("password");

        return authService.authenticate(userId, password)
                .map(user -> ResponseEntity.ok(Map.of(
                        "success", true,
                        "userId", user.getUserId(),
                        "userName", user.getUserName(),
                        "userRole", user.getUserRole()
                )))
                .orElse(ResponseEntity.status(401).body(Map.of(
                        "success", false,
                        "message", "Invalid credentials"
                )));
    }
}
