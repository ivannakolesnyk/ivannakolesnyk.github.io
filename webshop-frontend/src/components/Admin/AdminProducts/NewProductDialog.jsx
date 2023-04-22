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
const NewProductDialog = ({ open, onClose, onCreate }) => {
  const [newProduct, setNewProduct] = useState({
    name: "",
    price: 0,
    description: "",
    image_url: "",
    quantity_in_stock: 0,
    category_name: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setNewProduct({ ...newProduct, [name]: value });
  };

  const handleSubmit = () => {
    onCreate(newProduct);
    setNewProduct({
      name: "",
      price: 0,
      description: "",
      image_url: "",
      quantity_in_stock: 0,
      category_name: "",
    });
  };

  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>Create New Product</DialogTitle>
      <DialogContent>
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
          />
          <TextField
            fullWidth
            label="Image URL"
            name="image_url"
            value={newProduct.image_url}
            onChange={handleChange}
            margin="normal"
            helperText="Example: /assets/img/products/coffee/dark-roast.png"
          />
        </Box>
        <TextField
          fullWidth
          label="Quantity in Stock"
          name="quantity_in_stock"
          value={newProduct.quantity_in_stock}
          onChange={handleChange}
          type="number"
          inputProps={{ min: "0" }}
          margin="normal"
        />
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
      </DialogContent>
      <DialogActions>
        <Button
          variant="outlined"
          onClick={onClose}
          sx={{
            color: "secondary.main",
            borderColor: "primary.main",
          }}
        >
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
            !newProduct.image_url ||
            !newProduct.quantity_in_stock ||
            !newProduct.category_name
          }
        >
          Create Product
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default NewProductDialog;
