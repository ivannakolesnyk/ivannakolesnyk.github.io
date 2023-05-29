# Mocha Nooka Backend

This is the backend for our website. It is made using [Spring Boot][1]. It contains all the code for the API endpoints and interaction with the database. We use PostgreSQL for the database.

## Getting started

Our application is written in Java 17, so in order to compile and run it you will need to have the Java 17 (or later) JDK installed. Our application also requires Maven.

Look at the application.properties.example file for information on how to fill out the application.properties. The `jwt_secret_key` is just a (long) randomly generated string that acts as a secret key.

In order to use the test checkout with Stripe, you will need to [register an account with Stripe[2] in order to get API keys.

### Running the application

1. First, `cd` into the git repository folder
2. Move to the backend folder: `cd webshop-backend`
3. Compile the code: `mvn install`
4. Move to the folder with the jar: `cd target`
5. Run the application: `java -jar webshop-backend-0.0.1-SNAPSHOT.jar`

[1]: https://spring.io/projects/spring-boot
[2]: https://dashboard.stripe.com/register
