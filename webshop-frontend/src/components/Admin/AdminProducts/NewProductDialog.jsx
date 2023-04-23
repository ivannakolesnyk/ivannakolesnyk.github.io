import React, { useState } from "react";
import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  TextField,
  Select,
  MenuItem,
  InputLabel,
  FormControl,
  CircularProgress,
  Alert,
} from "@mui/material";

/**
 *
 * NewProductDialog is a React functional component that renders a dialog
 * for creating a new product. It allows the user to input the name, price, description,
 * image URL, quantity in stock, and category name for a new product.
 * @param {Object} props - The component's props
 * @param {boolean} props.open - Determines if the dialog is open or closed
 * @param {function} props.onClose - A function to close the dialog
 * @param {function} props.onCreate - A function to create a new product
 * @returns {JSX.Element} The rendered NewProductDialog component
 */
const NewProductDialog = ({
  open,
  onClose,
  onCreate,
  isCreating,
  createError,
}) => {
  const [newProduct, setNewProduct] = useState({
    category_name: "",
    description: "",
    imageAlt: "",
    ingredients: "",
    name: "",
    price: 0,
    product_image: "",
    qty_in_stock: 0,
    sale: false,
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setNewProduct({ ...newProduct, [name]: value });
  };

  const handleSubmit = () => {
    onCreate(newProduct);
    setNewProduct({
      category_name: "",
      description: "",
      imageAlt: "",
      ingredients: "",
      name: "",
      price: 0,
      product_image: "",
      qty_in_stock: 0,
      sale: false,
    });
  };

  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>Create New Product</DialogTitle>
      <DialogContent>
        {createError && (
          <Alert severity="error" sx={{ mb: 2 }}>
            {createError.message}
          </Alert>
        )}
        <FormControl fullWidth margin="normal">
          <InputLabel htmlFor="category">Category</InputLabel>
          <Select
            label="Category name"
            name="category_name"
            value={newProduct.category_name}
            onChange={handleChange}
            inputProps={{
              id: "category_name",
            }}
          >
            <MenuItem value="Coffee">Coffee</MenuItem>
            <MenuItem value="Tea">Tea</MenuItem>
            <MenuItem value="Equipment">Equipment</MenuItem>
          </Select>
        </FormControl>
        <TextField
          fullWidth
          label="Name"
          name="name"
          value={newProduct.name}
          onChange={handleChange}
          margin="normal"
        />
        <TextField
          fullWidth
          label="Price"
          name="price"
          value={newProduct.price}
          onChange={handleChange}
          type="number"
          inputProps={{ min: "0", step: "0.01" }}
          margin="normal"
        />
        <Box mt={2}>
          <TextField
            fullWidth
            label="Description"
            name="description"
            value={newProduct.description}
            onChange={handleChange}
            multiline
            rows={4}
            margin="normal"
          />
          {newProduct.category_name !== "Equipment" && (
            <TextField
              fullWidth
              label="Ingredients"
              name="ingredients"
              value={newProduct.ingredients}
              onChange={handleChange}
              rows={4}
            />
          )}
          <TextField
            fullWidth
            label="Image URL"
            name="product_image"
            value={newProduct.product_image}
            onChange={handleChange}
            margin="normal"
            helperText="Example: /assets/img/products/coffee/dark-roast.png"
          />
          <TextField
            fullWidth
            label="Image alt"
            name="imageAlt"
            value={newProduct.imageAlt}
            onChange={handleChange}
            margin="normal"
            // helperText="Example: Photo of a coffee cup"
          />
        </Box>
        <TextField
          fullWidth
          label="Quantity in Stock"
          name="qty_in_stock"
          value={newProduct.qty_in_stock}
          onChange={handleChange}
          type="number"
          inputProps={{ min: "0" }}
          margin="normal"
        />
      </DialogContent>
      <DialogActions>
        <Button variant="contained" onClick={onClose}>
          Cancel
        </Button>
        <Button
          variant="contained"
          color="primary"
          onClick={handleSubmit}
          disabled={
            !newProduct.name ||
            !newProduct.price ||
            !newProduct.description ||
            !newProduct.product_image ||
            !newProduct.imageAlt ||
            !newProduct.qty_in_stock ||
            !newProduct.category_name ||
            isCreating
          }
        >
          {isCreating ? <CircularProgress size={24} /> : "Create Product"}
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default NewProductDialog;
