import React, { useState } from "react";
import {
  Button,
  CircularProgress,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
} from "@mui/material";
import ProductForm from "./ProductForm";

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
  const initialState = {
    category_name: "",
    description: "",
    imageAlt: "",
    ingredients: "",
    name: "",
    price: 0,
    product_image: "",
    qty_in_stock: 0,
    sale: false,
  };

  const [newProduct, setNewProduct] = useState(initialState);

  const handleChange = (name, value) => {
    setNewProduct({ ...newProduct, [name]: value });
  };

  const handleSubmit = () => {
    onCreate(newProduct);
    setNewProduct(initialState);
  };

  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>Create New Product</DialogTitle>
      <DialogContent>
        <ProductForm
          product={newProduct}
          onChange={(name, value) => handleChange(name, value)}
          showIngredients={newProduct.category_name !== "Equipment"}
          isEdit={false}
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
