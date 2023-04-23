package no.ntnu.idata2306.group1.webshopbackend.utils;

import no.ntnu.idata2306.group1.webshopbackend.models.User;
import no.ntnu.idata2306.group1.webshopbackend.repositories.UserRepository;

/**
 * The {@code UrlUtil} class provides utility methods related to URLs
 * within the application. This class is not meant to be instantiated
 * or extended.
 */
public final class UrlUtil {

    /**
     * Private constructor to prevent instantiation.
     */
    private UrlUtil() {
    }

    /**
     * Returns the appropriate success URL based on the given user email.
     * If the user is an admin, the success URL will be for the admin page.
     * If the user is not an admin, the success URL will be for the user's
     * profile page.
     *
     * @param userRepository the {@code UserRepository} instance to query for the user
     * @param userEmail      the email address of the user for which the success URL is needed
     * @return the success URL as a {@code String}, or {@code null} if the user is not found
     */
    public static String successUrl(UserRepository userRepository, String userEmail) {
        User user = userRepository.findByEmail(userEmail).orElse(null);
        String successUrl = null;
        if (user != null) {
            successUrl = user.isAdmin() ? "/admin?paymentSuccess=true" : "/profile/vieworders?paymentSuccess=true";
        }
        return successUrl;
    }
}