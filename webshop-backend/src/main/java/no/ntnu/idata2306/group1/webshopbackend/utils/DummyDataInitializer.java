package no.ntnu.idata2306.group1.webshopbackend.utils;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.context.event.ApplicationReadyEvent;
import org.springframework.context.ApplicationListener;
import org.springframework.stereotype.Component;
import no.ntnu.idata2306.group1.webshopbackend.models.Role;
import no.ntnu.idata2306.group1.webshopbackend.repositories.RoleRepository;
import no.ntnu.idata2306.group1.webshopbackend.models.User;
import no.ntnu.idata2306.group1.webshopbackend.repositories.UserRepository;
import java.util.Optional;

/**
 * A class which inserts some dummy data into the database, when Spring Boot app has started.
 */
@Component
public class DummyDataInitializer implements ApplicationListener<ApplicationReadyEvent> {
  @Autowired
  private UserRepository userRepository;

  @Autowired
  private RoleRepository roleRepository;

  private final Logger logger = LoggerFactory.getLogger("DummyInit");

  /**
   * This method is called when the application is ready (loaded)
   *
   * @param event Event which we don't use :)
   */
  @Override
  public void onApplicationEvent(ApplicationReadyEvent event) {
    Optional<User> existingChuckUser = userRepository.findByEmail("chuck@chuck.com");
    if (existingChuckUser.isEmpty()) {
      logger.info("Importing test data...");
      User chuck = new User("chuck@chuck.com", "$2a$10$TdrxcA8tiOyvs8pDq6t6EuXjkKZ5s6SAux0bP1Rm8oqDQnpxU4GgW", "Chuck Chuck", "90090900", 7080, "Chicken Road 13", "Farm County");

      Role user = new Role("ROLE_USER");
      Role admin = new Role("ROLE_ADMIN");
      chuck.addRole(user);
      chuck.addRole(admin);

      roleRepository.save(user);
      roleRepository.save(admin);

      userRepository.save(chuck);
      logger.info("DONE importing test data");
    } else {
      logger.info("Users already in the database, not importing anything");
    }
  }
}
