package no.ntnu.idata2306.group1.webshopbackend.controller;

import java.util.List;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import no.ntnu.idata2306.group1.webshopbackend.model.data.Category;
import no.ntnu.idata2306.group1.webshopbackend.model.logic.CategoryRepository;

@RestController
@RequestMapping("/categories")
public class CategoryController {

  private final CategoryRepository categoryRepository;

  public CategoryController(CategoryRepository categoryRepository) {
    this.categoryRepository = categoryRepository;
  }

  /**
   * Add a new category.
   *
   * @param category The category object to be added.
   * @return A ResponseEntity containing the saved category object and a CREATED status.
   */
  @PostMapping
  public ResponseEntity<Category> addCategory(@RequestBody Category category) {
    Category savedCategory = categoryRepository.save(category);
    return new ResponseEntity<>(savedCategory, HttpStatus.CREATED);
  }

  /**
   * Get all categories from the database.
   *
   * @return A ResponseEntity containing the list of categories and an OK status.
   */
  @GetMapping
  public ResponseEntity<List<Category>> getCategories() {
    List<Category> categories = categoryRepository.findAll();
    return new ResponseEntity<>(categories, HttpStatus.OK);
  }
}

