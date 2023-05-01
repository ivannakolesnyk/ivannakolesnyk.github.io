package no.ntnu.idata2306.group1.webshopbackend.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

/**
 * Provides configuration for setting up Cross-Origin Resource Sharing (CORS) in the webshop backend.
 * Configures CORS for the webshop backend, allowing clients to access
 * resources from different origins while maintaining security.
 * <p>
 * Usage example:
 * Simply include this class in your project, and Spring Boot will automatically
 * apply the CORS configuration when the application starts.
 *
 * @author Mark
 */
@Configuration
public class ServerConfiguration {

    /**
     * Configures Cross-Origin Resource Sharing (CORS) for the webshop backend.
     *
     * @return A WebMvcConfigurer object that contains the CORS configuration.
     */
    @Bean
    public WebMvcConfigurer corsConfigurer() {
        return new WebMvcConfigurer() {

            /**
             * Adds CORS mappings to the provided registry.
             *
             * @param registry The CorsRegistry object to add the mappings to.
             */
            @Override
            public void addCorsMappings(CorsRegistry registry) {
                registry.addMapping("/**").allowedMethods("HEAD", "GET", "PUT", "POST", "DELETE", "PATCH");
            }
        };
    }
}
