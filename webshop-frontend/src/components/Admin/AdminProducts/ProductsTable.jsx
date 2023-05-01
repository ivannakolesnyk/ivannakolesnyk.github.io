import React, { useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  IconButton,
} from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import EditProductDialog from "./EditProduct/EditProductDialog";

/**
 *
 * The ProductsTable component is a React functional component used for displaying
 * a table of products with their details. It allows users to edit or delete a product
 * using the EditProductDialog component.
 * @param {Array} products - An array of product objects containing product information.
 * @param {Function} onEditProduct - A callback function for handling the edit product action.
 * @param {Function} onDeleteProduct - A callback function for handling the delete product action.
 * @returns {JSX.Element} The JSX code for the ProductsTable component.
 */
const ProductsTable = ({ products, onEditProduct, onDeleteProduct }) => {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [dialogOpen, setDialogOpen] = useState(false);

  const handleEditClick = (product) => {
    setSelectedProduct(product);
    setDialogOpen(true);
  };

  const handleCloseDialog = () => {
    setSelectedProduct(null);
    setDialogOpen(false);
  };

  return (
    <>
      <TableContainer component={Paper} aria-label="Products table">
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Product ID</TableCell>
              <TableCell>Name</TableCell>
              <TableCell>Price</TableCell>
              <TableCell>Quantity in Stock</TableCell>
              <TableCell>Edit</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {products?.map((product) => (
              <TableRow key={product.id}>
                <TableCell>{product.id}</TableCell>
                <TableCell>{product.name}</TableCell>
                <TableCell>{product.price}</TableCell>
                <TableCell>{product.qty_in_stock}</TableCell>
                <TableCell>
                  <IconButton
                    onClick={() => handleEditClick(product)}
                    aria-label={`Edit ${product.name}`}
                  >
                    <EditIcon />
                  </IconButton>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      {selectedProduct && (
        <EditProductDialog
          open={dialogOpen}
          product={selectedProduct}
          onClose={handleCloseDialog}
          onEditProduct={onEditProduct}
          onDeleteProduct={onDeleteProduct}
        />
      )}
    </>
  );
};

export default ProductsTable;
