package no.ntnu.idata2306.group1.webshopbackend.utils;

import no.ntnu.idata2306.group1.webshopbackend.models.*;
import no.ntnu.idata2306.group1.webshopbackend.repositories.*;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.context.event.ApplicationReadyEvent;
import org.springframework.context.ApplicationListener;
import org.springframework.stereotype.Component;

import java.util.Date;
import java.util.List;
import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.DependsOn;
import org.springframework.stereotype.Component;
import no.ntnu.idata2306.group1.webshopbackend.models.Category;
import no.ntnu.idata2306.group1.webshopbackend.models.Product;

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

  @Autowired
  private ShopOrderRepository shopOrderRepository;

  @Autowired
  private OrderLineRepository orderLineRepository;

  @Autowired
  private TestimonialRepository testimonialRepository;

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
    loadOrders();
    loadTestimonials();
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

  private void loadOrders() {
    List<User> users = userRepository.findAll();
    List<Product> products = productRepository.findAll();
    List<ShopOrder> shopOrders = shopOrderRepository.findAll();
    List<OrderLine> orderLines = orderLineRepository.findAll();

    if (users.isEmpty() || products.isEmpty()) {
      logger.warn("Unable to create dummy orders. Make sure users and products are loaded first.");
      return;
    }

    if (shopOrders.isEmpty() && orderLines.isEmpty()) {
      ShopOrder order1 = new ShopOrder(new Date(), users.get(0), "Processing");
      shopOrderRepository.save(order1);

      OrderLine orderLine1 = new OrderLine(order1, products.get(0), 2, products.get(0).getPrice());
      OrderLine orderLine2 = new OrderLine(order1, products.get(1), 1, products.get(1).getPrice());
      orderLineRepository.saveAll(List.of(orderLine1, orderLine2));

      ShopOrder order2 = new ShopOrder(new Date(), users.get(1), "Shipped");
      shopOrderRepository.save(order2);

      OrderLine orderLine3 = new OrderLine(order2, products.get(2), 3, products.get(2).getPrice());
      orderLineRepository.save(orderLine3);
    }
  }

  private void loadTestimonials() {
    List<Testimonial> testimonials = testimonialRepository.findAll();

    if (testimonials.isEmpty()) {
      Testimonial review1 = new Testimonial("Sean (25)", 5,
          "Mocha Nooka Cafe is my favorite spot for a chill, hip atmosphere. The coffee is always on point and the staff are super helpful. A definite must-visit for anyone who's looking for a unique cafe experience!",
          "missing.png");
      testimonialRepository.save(review1);

      Testimonial review2 = new Testimonial("John (65)", 5,
          "I've been coming to Mocha Nooka Cafe for years and it's never disappointed. The coffee is always freshly brewed and the food is always delicious. It's a great spot for a quick break, or a leisurely chat with friends.",
          "missing.png");
      testimonialRepository.save(review2);

      Testimonial review3 = new Testimonial("Toni (16)", 5,
          "I love coming to Mocha Nooka Cafe! It's the perfect spot to hang out with friends and enjoy something tasty and refreshing. The atmosphere is always chill and the staff are really friendly. Highly recommended!",
          "missing.png");
      testimonialRepository.save(review3);
    }
  }
}
