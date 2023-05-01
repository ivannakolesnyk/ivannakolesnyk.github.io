package no.ntnu.idata2306.group1.webshopbackend.config;

import com.stripe.Stripe;
import jakarta.annotation.PostConstruct;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Component;


/**
 * Provides configuration for the Stripe API in the webshop backend.
 * This class initializes the Stripe API with the secret key provided in the application properties file.
 * The Stripe API is used for handling payments in the webshop.
 *
 * <p>
 * Usage example:
 * Add the following to your application.properties file:
 * stripe.secret.key=your_secret_key_here
 * Then, simply use the Stripe API in your application.
 *
 * @author Mark
 */
@Component
public class StripeConfig {
    @Value("${stripe.secret.key}")
    private String secretKey;

    /**
     * Initializes the Stripe API with the secret key.
     * <p>
     * This method is called automatically after the class has been
     * constructed, thanks to the @PostConstruct annotation.
     */
    @PostConstruct
    public void init() {
        Stripe.apiKey = secretKey;
    }
}

