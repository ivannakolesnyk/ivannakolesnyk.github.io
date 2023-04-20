import React, { useState } from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
  Button,
  Grid,
} from "@mui/material";

/**
 *
 * The ProductDialog component is a React functional component used for displaying
 * a dialog with form fields to edit or delete a product. It allows users to modify
 * product properties or confirm the deletion of a product.
 * @param {boolean} open - A boolean value that determines if the dialog is open or closed.
 * @param {Object} product - An object containing product information.
 * @param {Function} onClose - A callback function for handling the closing of the dialog.
 * @param {Function} onEditProduct - A callback function for handling the edit product action.
 * @param {Function} onDeleteProduct - A callback function for handling the delete product action.
 * @returns {JSX.Element} The JSX code for the ProductDialog component.
 */
const ProductDialog = ({
  open,
  product,
  onClose,
  onEditProduct,
  onDeleteProduct,
}) => {
  const [editedProduct, setEditedProduct] = useState(product);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setEditedProduct({ ...editedProduct, [name]: value });
  };

  const handleSaveChanges = () => {
    onEditProduct(editedProduct);
    onClose();
  };

  const handleDelete = () => {
    onDeleteProduct(product.product_id);
    onClose();
  };

  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>Edit Product</DialogTitle>
      <DialogContent>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Name"
              name="name"
              value={editedProduct.name}
              onChange={handleChange}
              margin="normal"
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Price"
              name="price"
              value={editedProduct.price}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Description"
              name="description"
              value={editedProduct.description}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Image Path"
              name="product_image_path"
              value={editedProduct.product_image_path}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Quantity in Stock"
              name="quantity_in_stock"
              value={editedProduct.quantity_in_stock}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Category ID"
              name="category_id"
              value={editedProduct.category_id}
              onChange={handleChange}
            />
          </Grid>
        </Grid>
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
        <Button onClick={handleSaveChanges} variant="contained" color="primary">
          Save Changes
        </Button>
        <Button
          variant="contained"
          color="error"
          onClick={() => {
            if (
              window.confirm("Are you sure you want to delete this product?")
            ) {
              handleDelete();
            }
          }}
        >
          Delete Product
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default ProductDialog;
