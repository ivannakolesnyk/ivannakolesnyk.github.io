import React, { useState } from "react";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
} from "@mui/material";
import ProductForm from "../ProductForm";

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

  const handleChange = (name, value, nestedProperty) => {
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
        <ProductForm
          product={editedProduct}
          onChange={(name, value, nestedProperty) =>
            handleChange(name, value, nestedProperty)
          }
          showIngredients={editedProduct.category.name !== "Equipment"}
          isEdit={true}
        />
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
