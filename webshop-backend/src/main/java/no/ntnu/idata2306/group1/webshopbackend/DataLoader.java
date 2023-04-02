package no.ntnu.idata2306.group1.webshopbackend;

import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.DependsOn;
import org.springframework.stereotype.Component;
import no.ntnu.idata2306.group1.webshopbackend.model.data.Category;
import no.ntnu.idata2306.group1.webshopbackend.model.data.Product;
import no.ntnu.idata2306.group1.webshopbackend.model.logic.CategoryRepository;
import no.ntnu.idata2306.group1.webshopbackend.model.logic.ProductRepository;

@Component
@DependsOn("dataSource")
public class DataLoader implements CommandLineRunner {

  private final CategoryRepository categoryRepository;
  private final ProductRepository productRepository;

  public DataLoader(CategoryRepository categoryRepository, ProductRepository productRepository) {
    this.categoryRepository = categoryRepository;
    this.productRepository = productRepository;
  }

  @Override
  public void run(String... args) throws Exception {
    initData();
  }

  /**
   * Initialize the database with categories and products if the category/product table is empty.
   */
  private void initData() {
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
          "products/coffee/coffee1-min.png", 100, coffee));
      productRepository.save(new Product("Green Tea", 1.75, true, "A refreshing and healthy drink.",
          "products/tea/tea1-min.png", 50, tea));
      productRepository.save(new Product("Croissant", 2.00, false, "A flaky and buttery pastry.",
          "products/snacks/brown_macarons.png", 20, pastry));
      productRepository
          .save(new Product("Sandwich", 4.00, false, "A delicious sandwich with various fillings.",
              "products/snacks/cho_cookie.png", 30, food));
      productRepository.save(new Product("Cookie", 1.00, true, "A sweet and crunchy snack.",
          "products/snacks/chocolate_bar.png", 100, snack));
      productRepository.save(
          new Product("Coffee Maker", 49.99, false, "A high-quality coffee maker for home use.",
              "products/equipment/coffee_machin.png", 10, equipment));
    }
  }


}

