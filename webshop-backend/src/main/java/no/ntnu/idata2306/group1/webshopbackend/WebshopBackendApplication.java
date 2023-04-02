package no.ntnu.idata2306.group1.webshopbackend;

import javax.sql.DataSource;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.DependsOn;
import org.springframework.jdbc.datasource.DriverManagerDataSource;
import com.jcraft.jsch.JSchException;
import no.ntnu.idata2306.group1.webshopbackend.model.data.Category;
import no.ntnu.idata2306.group1.webshopbackend.model.logic.CategoryRepository;
import no.ntnu.idata2306.group1.webshopbackend.utils.SshTunnel;

/**
 * WebshopBackendApplication is the main entry point for the Spring Boot application. It sets up an
 * SSH tunnel to connect securely to a remote PostgreSQL database through a password-based SSH
 * connection and configures a DataSource for database access.
 *
 * The application.properties file is used to store the required SSH and database configuration. The
 * SSH tunnel is established using the SshTunnel utility class, and the DataSource is configured to
 * connect to the local forwarded port of the SSH tunnel.
 */
@SpringBootApplication
public class WebshopBackendApplication {

    public static void main(String[] args) {
        SpringApplication.run(WebshopBackendApplication.class, args);
    }

    /**
     * Creates a SSH Tunnel to securely connect to the server. The SSH Tunnel will be destroyed when
     * the application stopps.
     * 
     * @param sshHost The Internal IPv4 address of the server
     * @param sshPort The port of the server
     * @param sshUser A valid username on the server (NTNU username which is a student/teacher)
     * @param sshPassword The password of the user
     * @param dbHost The Public IPv6 address of the server
     * @param dbPort The port which the DB is running on
     * 
     * @return SshTunnel instance
     * @throws JSchException
     */
    @Bean(destroyMethod = "close")
    public SshTunnel sshTunnel(@Value("${ssh.host}") String sshHost,
            @Value("${ssh.port}") int sshPort, @Value("${ssh.user}") String sshUser,
            @Value("${ssh.password}") String sshPassword, @Value("${db.host}") String dbHost,
            @Value("${db.port}") int dbPort) throws JSchException {
        SshTunnel sshTunnel = new SshTunnel(sshHost, sshPort, sshUser, sshPassword);
        int localPort = sshTunnel.createLocalForwarding(dbPort, dbHost, 0);
        System.setProperty("db.port", String.valueOf(localPort));
        return sshTunnel;
    }

    /**
     * Creates the DataSource bean to connect to the local forwarded port of the SSH Tunnel. Will
     * only run after a secure SSH connection have been established.
     * 
     * @param dbName The name of the DB to connect to
     * @param dbUser A valid username on the DB
     * @param dbPassword The password of the user
     * 
     * @return The DataSource instance
     */
    @Bean
    @DependsOn("sshTunnel")
    public DataSource dataSource(@Value("${db.name}") String dbName,
            @Value("${db.user}") String dbUser, @Value("${db.password}") String dbPassword) {
        DriverManagerDataSource dataSource = new DriverManagerDataSource();
        dataSource.setDriverClassName("org.postgresql.Driver");
        dataSource.setUrl(
                "jdbc:postgresql://localhost:" + System.getProperty("db.port") + "/" + dbName);
        dataSource.setUsername(dbUser);
        dataSource.setPassword(dbPassword);
        return dataSource;
    }

    /**
     * A bean that initializes some sample data in the CategoryRepository. Eecuted on application
     * start up.
     * 
     * @param categoryRepository the CategoryRepository instance to use for saving the categories
     * @return A CommandLineRunner lambda that creates and saves Category instances to the
     *         repository
     */
    @Bean
    @DependsOn("dataSource")
    public CommandLineRunner initData(CategoryRepository categoryRepository) {
        return (args) -> {
            // Check if there are any categories in the Category table
            if (categoryRepository.count() == 0) {
                // Create and save a few categories to the database
                categoryRepository.save(new Category("Coffee"));
                categoryRepository.save(new Category("Tea"));
                categoryRepository.save(new Category("Pastry"));
                categoryRepository.save(new Category("Food"));
                categoryRepository.save(new Category("Snack"));
                categoryRepository.save(new Category("Equipment"));
            }
        };
    }
}
