package no.ntnu.idata2306.group1.webshopbackend;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.jdbc.datasource.DriverManagerDataSource;

import javax.sql.DataSource;

@SpringBootApplication
public class WebshopBackendApplication {

    public static void main(String[] args) {
        SpringApplication.run(WebshopBackendApplication.class, args);
    }

    /**
     * Creates the DataSource bean to connect to the given PostgreSQL database configuration.
     *
     * @param dbHost     The IPv6 address of the database server
     * @param dbPort     The port which the DB is running on
     * @param dbName     The name of the DB to connect to
     * @param dbUser     A valid username on the DB
     * @param dbPassword The password of the user
     * @return The DataSource instance
     */
    @Bean
    public DataSource dataSource(@Value("${db.host}") String dbHost,
                                 @Value("${db.port}") int dbPort,
                                 @Value("${db.name}") String dbName,
                                 @Value("${db.user}") String dbUser,
                                 @Value("${db.password}") String dbPassword) {
        DriverManagerDataSource dataSource = new DriverManagerDataSource();
        dataSource.setDriverClassName("org.postgresql.Driver");
        dataSource.setUrl("jdbc:postgresql://" + dbHost + ":" + dbPort + "/" + dbName);
        dataSource.setUsername(dbUser);
        dataSource.setPassword(dbPassword);
        return dataSource;
    }
}
