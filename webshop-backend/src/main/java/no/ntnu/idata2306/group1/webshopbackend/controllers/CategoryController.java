package no.ntnu.idata2306.group1.webshopbackend.controllers;

import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.responses.ApiResponse;
import io.swagger.v3.oas.annotations.responses.ApiResponses;
import no.ntnu.idata2306.group1.webshopbackend.models.Category;
import no.ntnu.idata2306.group1.webshopbackend.repositories.CategoryRepository;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;

/**
 * Responsible for the endpoints of categories
 */
@RestController
@RequestMapping("/api/categories")
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
    public ResponseEntity<?> addCategory(@RequestBody Category category) {
        if (category.getName().length() < 3) {
            return new ResponseEntity<>("Invalid input data", HttpStatus.BAD_REQUEST);
        }
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

    /**
     * Delete a category by name.
     *
     * @param body The request body which include the name of the category to be deleted.
     * @return A ResponseEntity containing the name of the deleted category and a NO_CONTENT status.
     */
    @Operation(summary = "Delete a category by name")
    @ApiResponses(value = {
            @ApiResponse(responseCode = "204", description = "Category deleted successfully"),
            @ApiResponse(responseCode = "404", description = "Category not found")
    })
    @DeleteMapping
    public ResponseEntity<Void> deleteCategory(@RequestBody Map<String, String> body) {
        String name = body.get("name");
        Category category = categoryRepository.findByName(name);
        if (category != null) {
            categoryRepository.delete(category);
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }
}