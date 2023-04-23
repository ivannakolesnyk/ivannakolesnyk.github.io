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
import java.util.Optional;

/**
 * A class which inserts some dummy data into the database, when Spring Boot app has started.
 */
@Component
public class DummyDataInitializer implements ApplicationListener<ApplicationReadyEvent> {
    private final Logger logger = LoggerFactory.getLogger("DummyInit");
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
            categoryRepository.save(new Category("Equipment"));
        }

        if (productRepository.count() == 0) {
            // Retrieve categories
            Category coffee = categoryRepository.findByName("Coffee");
            Category tea = categoryRepository.findByName("Tea");
            Category equipment = categoryRepository.findByName("Equipment");

            // Create and save products
            productRepository.save(new Product("Signature ", 299, false, "Our Signature Blend - Aromatic, Rich, and Smooth. Our coffee beans are carefully selected from the best coffee farms around the world, ensuring a premium quality cup of coffee every time. This blend features a perfect balance of Arabica and Robusta beans, resulting in a bold flavor with notes of dark chocolate and caramel. Made with love for coffee enthusiasts who appreciate a truly exceptional coffee experience", "100% Arabica and Robusta coffee beans", "Coffee image", "products/coffee/coffee1.png",
                    100, coffee));
            productRepository.save(new Product("Single-Origin ", 399, false, "Ethically Sourced Single-Origin Beans - Uniquely Distinctive, Vibrant, and Exotic. Our single-origin coffee beans are sourced directly from small coffee farms in regions known for their exceptional coffee beans. Each origin has its own unique flavor profile, from fruity and floral to earthy and bold, offering a diverse selection for coffee connoisseurs seeking an adventure in every sip.",
                    "100% Arabica coffee beans from single origins.", "Coffee image", "products/coffee/coffee2.png",
                    100, coffee));
            productRepository.save(new Product("Decaf Delight ", 299, false, "Decaf Delight - Smooth, Balanced, and Flavorful. Our decaf coffee beans are perfect for those who want to enjoy the taste of coffee without the caffeine kick. We use a careful decaffeination process that preserves the natural flavors of the coffee beans, resulting in",
                    "100% Arabica decaffeinated coffee beans.", "Coffee image", "products/coffee/coffee3.png",
                    100, coffee));
            productRepository.save(new Product("Organic ", 249, true, "Organic and Sustainable Blend - Clean, Pure, and Eco-Friendly. Our organic coffee beans are grown using sustainable farming practices that prioritize the well-being of the environment and the farmers. These beans are certified organic, meaning they are free from pesticides, herbicides, and other harmful chemicals. Enjoy a guilt-free cup of coffee with a smooth, clean taste and a lingering finish.",
                    "100% Organic Arabica coffee beans.", "Coffee image", "products/coffee/coffee4.png",
                    100, coffee));
            productRepository.save(new Product("Seasonal Blend", 499, false, "Limited Edition Seasonal Blend - Unique, Festive, and Flavorful. Our seasonal blend is carefully crafted using the finest coffee beans harvested during a specific time of the year, resulting in a coffee with a distinct flavor profile that captures the essence of the season. Whether it's a warm spiced blend for winter or a fruity and refreshing blend for summer, our limited edition seasonal coffee is a special treat for coffee lovers who appreciate variety and creativity in their cup.",
                    "Seasonal coffee beans sourced from various origins.", "Coffee image", "products/coffee/coffee5.png",
                    100, coffee));

            productRepository.save(new Product("English Breakfast", 199, true, "Classic English Breakfast - Robust, Bold, and Energizing. Our English Breakfast tea is a classic blend of high-quality black teas, carefully selected for their bold and robust flavors. It's the perfect way to start your day, with a brisk and invigorating cup of tea that pairs well with milk and sugar or as a standalone beverage.",
                    "Black tea blend (Assam, Ceylon, Kenyan, and/or Chinese black teas).", "Tea image", "products/tea/tea1.png",
                    100, tea));
            productRepository.save(new Product("Chamomile ", 249, false, "Charming Chamomile - Calming, Soothing, and Floral. Our Chamomile tea is a calming infusion of dried chamomile flowers, known for their gentle, floral flavor and soothing properties. This caffeine-free herbal tea is perfect for relaxing after a long day, helping you unwind and find your zen. ",
                    "Chamomile flowers.", "Tea image", "products/tea/tea2.png",
                    100, tea));
            productRepository.save(new Product("Earl Grey", 299, false, "Exotic Earl Grey - Citrusy, Fragrant, and Sophisticated. Our Earl Grey tea is a luxurious blend of black tea and bergamot oil, known for its distinctive citrusy aroma and bold flavor. This timeless classic is a favorite among tea enthusiasts, with its elegant and sophisticated taste that can be enjoyed with or without milk.",
                    "Black tea, bergamot oil.", "Tea image", "products/tea/tea3.png",
                    100, tea));
            productRepository.save(new Product("Peppermint ", 399, false, "Refreshing Peppermint - Cool, Minty, and Invigorating. Our Peppermint tea is a refreshing and invigorating infusion of dried peppermint leaves, known for their cooling and soothing properties. This caffeine-free herbal tea is perfect for sipping after a meal or when you need a burst of freshness to awaken your senses.",
                    "Peppermint leaves.", "Tea image", "products/tea/tea4.png",
                    100, tea));
            productRepository.save(new Product("Green Jasmine", 199, true, "Delightful Green Jasmine - Floral, Fragrant, and Delicate. Our Green Jasmine tea is a delicate blend of green tea leaves and jasmine flowers, known for their floral aroma and refreshing taste. This exquisite tea is hand-picked and carefully crafted to create a soothing and aromatic experience with every sip.",
                    "Green tea leaves, jasmine flowers.", "Tea image", "products/tea/tea5.png",
                    100, tea));

            productRepository.save(new Product("Bamboo Plate ", 199, true, "Eco-Friendly Bamboo Plate - Sustainable, Stylish, and Earth-Friendly. Our bamboo plate is not only an elegant addition to your dining table, but it's also made from sustainable bamboo, making it an eco-friendly choice for conscious consumers. This durable and versatile plate is perfect for serving appetizers, salads, or main dishes, and adds a touch of natural beauty to your dining experience.",
                    "", "Equipment image", "products/equipment/bamboo-plate.png",
                    100, equipment));
            productRepository.save(new Product("Carafe", 149, true, "Elegant Carafe - Sleek, Functional, and Versatile. Our carafe is designed to impress with its sleek and elegant design. Made from high-quality glass, this versatile piece is perfect for serving water, juice, wine, or other beverages. Its ergonomic handle and easy-pour spout make it a practical and stylish choice for any occasion, whether it's a formal dinner or a casual gathering..",
                    "", "Equipment image", "products/equipment/carafe.png",
                    100, equipment));
            productRepository.save(new Product("Cinnamon Infuser", 299, false, "Cinnamon Infuser - Aromatic, Flavorful, and Convenient. Our cinnamon infuser is a must-have accessory for any coffee or tea lover. Made from high-quality stainless steel, this handy tool is designed to hold cinnamon sticks, releasing their aromatic flavors into your hot beverages. It's a simple and convenient way to add a touch of warmth and spice to your favorite drinks.",
                    "", "Equipment image", "products/equipment/cinnamon-infuser.png",
                    100, equipment));
            productRepository.save(new Product("Coffee Cup", 199, false, "Classic Coffee Cup - Timeless, Durable, and Comfortable. Our classic coffee cup is a timeless piece that never goes out of style. Made from high-quality ceramic, this durable cup is designed to retain heat, keeping your coffee or tea at the perfect temperature. Its comfortable handle and classic design make it a favorite" +
                    " among coffee enthusiasts who appreciate a simple and elegant cup for their daily brew.",
                    "", "Equipment image", "products/equipment/white-cup.png",
                    100, equipment));
            productRepository.save(new Product("Coffee Machine", 1249, false, "Professional Coffee Machine - Powerful, Efficient, and Reliable. Our coffee machine is a top-of-the-line piece of equipment for serious coffee enthusiasts. With its powerful brewing capabilities, precise temperature control, and customizable settings, this machine delivers a superior coffee experience every time. Its sleek design and stainless steel construction make it a stylish and durable addition to any coffee lover's kitchen.",
                    "", "Equipment image", "products/equipment/coffee-machine.png",
                    100, equipment));
            productRepository.save(new Product("Coffee Pot", 249, false, "Stylish Coffee Pot - Sleek, Functional, and Elegant. Our coffee pot is designed to impress with its sleek and stylish design. Made from high-quality glass or stainless steel, this coffee pot is perfect for brewing and serving coffee in style. Its ergonomic handle and easy-pour spout make it a practical and elegant choice for serving coffee to guests or enjoying a quiet moment alone.",
                    "", "Equipment image", "products/equipment/coffeepot.png",
                    100, equipment));
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

            OrderLine orderLine1 = new OrderLine(order1, 2, products.get(0).getPrice(), products.get(0).getName());
            OrderLine orderLine2 = new OrderLine(order1, 1, products.get(1).getPrice(), products.get(1).getName());
            orderLineRepository.saveAll(List.of(orderLine1, orderLine2));

            ShopOrder order2 = new ShopOrder(new Date(), users.get(1), "Shipped");
            shopOrderRepository.save(order2);

            OrderLine orderLine3 = new OrderLine(order2, 3, products.get(2).getPrice(), products.get(2).getName());
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
