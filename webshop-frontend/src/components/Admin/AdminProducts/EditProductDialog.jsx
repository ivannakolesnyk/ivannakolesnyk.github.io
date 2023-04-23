import React, { useState } from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
  Button,
  Grid,
  Select,
  MenuItem,
  InputLabel,
  FormControl,
} from "@mui/material";

/**
 *
 * The EditProductDialog component is a React functional component used for displaying
 * a dialog with form fields to edit or delete a product. It allows users to modify
 * product properties or confirm the deletion of a product.
 * @param {boolean} open - A boolean value that determines if the dialog is open or closed.
 * @param {Object} product - An object containing product information.
 * @param {Function} onClose - A callback function for handling the closing of the dialog.
 * @param {Function} onEditProduct - A callback function for handling the edit product action.
 * @param {Function} onDeleteProduct - A callback function for handling the delete product action.
 * @returns {JSX.Element} The JSX code for the EditProductDialog component.
 */
const EditProductDialog = ({
  open,
  product,
  onClose,
  onEditProduct,
  onDeleteProduct,
}) => {
  const [editedProduct, setEditedProduct] = useState(product);

  const handleChange = (evt, nestedProperty) => {
    const { name, value } = evt.target;

    if (nestedProperty) {
      setEditedProduct((prevEditedProduct) => {
        return {
          ...prevEditedProduct,
          [nestedProperty]: {
            ...prevEditedProduct[nestedProperty],
            [name]: value,
          },
        };
      });
    } else {
      setEditedProduct({ ...editedProduct, [name]: value });
    }
  };

  const handleSaveChanges = () => {
    onEditProduct(editedProduct);
    onClose();
  };

  const handleDelete = () => {
    onDeleteProduct(product.id);
    onClose();
  };

  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>Edit Product</DialogTitle>
      <DialogContent>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <FormControl fullWidth margin="normal">
              <InputLabel htmlFor="category_name" >Category</InputLabel>
              <Select
                label="Category name"
                name="name"
                value={editedProduct.category.name}
                onChange={(evt) => {
                  handleChange(evt, "category");
                }}
                inputProps={{
                  id: "category_name",
                }}
              >
                <MenuItem value="Coffee">Coffee</MenuItem>
                <MenuItem value="Tea">Tea</MenuItem>
                <MenuItem value="Equipment">Equipment</MenuItem>
              </Select>
            </FormControl>
          </Grid>
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
          {editedProduct.category.name !== "Equipment" && (
              <Grid item xs={12}>
                <TextField
                    fullWidth
                    label="Ingredients"
                    name="ingredients"
                    value={editedProduct.ingredients}
                    onChange={handleChange}
                    rows={4}
                />
              </Grid>
          )}
          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Image URL"
              name="product_image"
              value={editedProduct.product_image}
              onChange={handleChange}
              margin="normal"
              helperText="Example: /assets/img/products/coffee/dark-roast.png"
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
                fullWidth
                label="Image alt"
                name="imageAlt"
                value={editedProduct.imageAlt}
                onChange={handleChange}
                margin="normal"
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Quantity in Stock"
              name="qty_in_stock"
              value={editedProduct.qty_in_stock}
              onChange={handleChange}
            />
          </Grid>
        </Grid>
      </DialogContent>
      <DialogActions>
        <Button variant="contained" onClick={onClose}>
          Cancel
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
          Delete
        </Button>
        <Button onClick={handleSaveChanges} variant="contained" color="primary">
          Save
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default EditProductDialog;
