package no.ntnu.idata2306.group1.webshopbackend.utils;

import no.ntnu.idata2306.group1.webshopbackend.models.Category;
import no.ntnu.idata2306.group1.webshopbackend.models.Product;
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
import java.util.List;
import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.DependsOn;
import org.springframework.stereotype.Component;
import no.ntnu.idata2306.group1.webshopbackend.models.Category;
import no.ntnu.idata2306.group1.webshopbackend.models.Product;
import no.ntnu.idata2306.group1.webshopbackend.repositories.CategoryRepository;
import no.ntnu.idata2306.group1.webshopbackend.repositories.ProductRepository;

import java.util.List;
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

  @Autowired
  private CategoryRepository categoryRepository;

  @Autowired
  private ProductRepository productRepository;

  private final Logger logger = LoggerFactory.getLogger("DummyInit");

  /**
   * This method is called when the application is ready (loaded)
   *
   * @param event Event which we don't use :)
   */
  @Override
  public void onApplicationEvent(ApplicationReadyEvent event) {
    loadUsers();
    loadCategoriesAndProducts();
  }

  private void loadUsers() {
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

  private void loadCategoriesAndProducts() {
    if (categoryRepository.count() == 0) {
      categoryRepository.save(new Category("Coffee"));
      categoryRepository.save(new Category("Tea"));
      categoryRepository.save(new Category("Pastry"));
      categoryRepository.save(new Category("Food"));
      categoryRepository.save(new Category("Snack"));
      categoryRepository.save(new Category("Equipment"));
    }

    if (productRepository.count() == 0) {
      // Retrieve categories
      Category coffee = categoryRepository.findByName("Coffee");
      Category tea = categoryRepository.findByName("Tea");
      Category pastry = categoryRepository.findByName("Pastry");
      Category food = categoryRepository.findByName("Food");
      Category snack = categoryRepository.findByName("Snack");
      Category equipment = categoryRepository.findByName("Equipment");

      // Create and save products
      productRepository.save(new Product("Espresso", 2.50, false, "A strong and bold coffee.",
              List.of("coffe", "sugar", "something"), "Coffee image", "products/coffee/coffee1-min.png",
              100, coffee));
      productRepository.save(new Product("Green Tea", 1.75, true, "A refreshing and healthy drink.",
              List.of("tea", "sugar", "something"), "Tea image", "products/tea/tea1-min.png", 50, tea));
      productRepository.save(new Product("Croissant", 2.00, false, "A flaky and buttery pastry.",
              List.of("something", "something", "something"), "Pastry image",
              "products/snacks/brown_macarons.png", 20, pastry));
      productRepository
              .save(new Product("Sandwich", 4.00, false, "A delicious sandwich with various fillings.",
                      List.of("something", "something", "something"), "Sandwich image",
                      "products/snacks/cho_cookie.png", 30, food));
      productRepository.save(new Product("Cookie", 1.00, true, "A sweet and crunchy snack.",
              List.of("something", "something", "something"), "Cookie image",
              "products/snacks/chocolate_bar.png", 100, snack));
      productRepository.save(new Product("Coffee Maker", 49.99, false,
              "A high-quality coffee maker for home use.", List.of(), "Coffee maker image",
              "products/equipment/coffee_machin.png", 10, equipment));
    }
  }

}
