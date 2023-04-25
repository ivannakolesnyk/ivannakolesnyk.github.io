package no.ntnu.idata2306.group1.webshopbackend.controllers;

import java.util.List;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import no.ntnu.idata2306.group1.webshopbackend.models.Category;
import no.ntnu.idata2306.group1.webshopbackend.repositories.CategoryRepository;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.responses.ApiResponse;
import io.swagger.v3.oas.annotations.responses.ApiResponses;

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
  @Operation(summary = "Add a new category")
  @ApiResponses(value = {
          @ApiResponse(responseCode = "201", description = "Category created successfully"),
          @ApiResponse(responseCode = "400", description = "Invalid input data")
  })
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
  @Operation(summary = "Get all categories")
  @ApiResponses(value = {
          @ApiResponse(responseCode = "200", description = "Categories fetched successfully"),
          @ApiResponse(responseCode = "404", description = "No categories found")
  })
  @GetMapping
  public ResponseEntity<List<Category>> getCategories() {
    List<Category> categories = categoryRepository.findAll();
    return new ResponseEntity<>(categories, HttpStatus.OK);
  }
}
