package no.ntnu.idata2306.group1.webshopbackend;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.context.event.ApplicationReadyEvent;
import org.springframework.context.ApplicationListener;
import org.springframework.stereotype.Component;
import no.ntnu.idata2306.group1.webshopbackend.model.logic.Role;
import no.ntnu.idata2306.group1.webshopbackend.model.logic.RoleRepository;
import no.ntnu.idata2306.group1.webshopbackend.model.logic.User;
import no.ntnu.idata2306.group1.webshopbackend.model.logic.UserRepository;
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
    Optional<User> existingChuckUser = userRepository.findByUsername("chuck");
    if (existingChuckUser.isEmpty()) {
      logger.info("Importing test data...");
      User chuck = new User("chuck", "$2a$10$TdrxcA8tiOyvs8pDq6t6EuXjkKZ5s6SAux0bP1Rm8oqDQnpxU4GgW",
          "I don't need a mic for remote conferences. My voice goes directly into USB.");
      User dave = new User("dave", "$2a$10$nwbEjYKgcomq2rjUPge2JegqI.y4zEcNqRMPdqwFnd1ytorNCQM/y",
          "Dangerous Dave");
      Role user = new Role("ROLE_USER");
      Role admin = new Role("ROLE_ADMIN");
      chuck.addRole(user);
      chuck.addRole(admin);
      dave.addRole(user);

      roleRepository.save(user);
      roleRepository.save(admin);

      userRepository.save(chuck);
      userRepository.save(dave);
      logger.info("DONE importing test data");
    } else {
      logger.info("Users already in the database, not importing anything");
    }
  }
}
