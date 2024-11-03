package com.theateam.waaprojectspringbackend.controller;

import com.theateam.waaprojectspringbackend.service.EmailService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import java.util.Map;

@RestController
@RequestMapping("/api")
@RequiredArgsConstructor
public class SendMailerController {

    private final EmailService emailService;

    @PostMapping("/sendEmail")
    public ResponseEntity<String> sendEmail(@RequestBody Map<String, Object> request) {
        // Validate request body (e.g., check for required fields)
        if (!request.containsKey("email") || !request.containsKey("subject") || !request.containsKey("body")) {
            return ResponseEntity.badRequest().body("Missing required fields");
        }

        // Additional email validation can be done here
        String email = (String) request.get("email");
        if (!isValidEmail(email)) {
            return ResponseEntity.badRequest().body("Invalid email address");
        }

        return emailService.sendEmailFromRequest(request);
    }

    // Basic email validation method
    private boolean isValidEmail(String email) {
        return email != null && email.matches("^[\\w-\\.]+@([\\w-]+\\.)+[\\w-]{2,4}$");
    }
}
