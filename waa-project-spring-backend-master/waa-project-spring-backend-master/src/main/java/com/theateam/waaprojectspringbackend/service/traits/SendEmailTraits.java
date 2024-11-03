package com.theateam.waaprojectspringbackend.service.traits;

import com.theateam.waaprojectspringbackend.entity.Offer;
import com.theateam.waaprojectspringbackend.entity.Property;
import com.theateam.waaprojectspringbackend.service.EmailService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.scheduling.annotation.Async;
import org.springframework.stereotype.Component;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

@Component
public class SendEmailTraits {
    private final EmailService emailService;
    private static final Logger logger = LoggerFactory.getLogger(SendEmailTraits.class);

    @Autowired
    public SendEmailTraits(EmailService emailService) {
        this.emailService = emailService;
    }

    @Async
    public void pendingProperty(Property property, Offer offer) {
        String subject = String.format("Your property \"%s\" is now pending!", property.getName());
        String body = String.format("Congratulations! An offer of $%s has been accepted by the user on your property \"%s\". Please check your account for more details.",
                offer.getPrice(), property.getName());

        sendEmail(offer.getCustomer().getEmail(), subject, body);
    }

    @Async
    public void contingentProperty(Property property, Offer offer) {
        String subject = String.format("Your property \"%s\" is now contingent!", property.getName());
        String body = String.format("Good news! An offer of $%s has been made on your property \"%s\" and is now contingent. Please check your account for more details.",
                offer.getPrice(), property.getName());

        sendEmail(property.getOwner().getEmail(), subject, body);
    }

    private void sendEmail(String email, String subject, String body) {
        try {
            emailService.sendEmail(email, subject, body);
            logger.info("Email sent successfully to {}", email);
        } catch (Exception e) {
            logger.error("Failed to send email to {}: {}", email, e.getMessage());
        }
    }
}
