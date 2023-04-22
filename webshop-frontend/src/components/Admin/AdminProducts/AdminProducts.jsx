import React, { useState, useEffect } from "react";
import { Box, Button } from "@mui/material";
import TitledBox from "../../Standard_components/TitledBox";
import ProductsTable from "./ProductsTable";
import allproducts from "./dummyproducts";
import NewProductDialog from "./NewProductDialog";
import axios from "axios";

/**
 *
 * The AdminProducts component is a React functional component used for displaying
 * all the products in the database. The products can be viewed,added, edited or deleted.
 * @returns {JSX.Element} The JSX code for the AdminProducts component.
 */
const AdminProducts = () => {
  const [products, setProducts] = useState([]);
  const [newProductDialogOpen, setNewProductDialogOpen] = useState(false);

  useEffect(() => {
    // Replace this with the actual API call to get all products.
    setProducts(allproducts);
  }, []);

  const createProduct = (newProduct) => {
    axios
      .post("/api/products", newProduct)
      .then((response) => {
        setNewProductDialogOpen(false);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const editProduct = (product) => {
    // Add the API call for updating a product here.
    console.log("Edited Product:", product);
  };

  const deleteProduct = (productId) => {
    // Add the API call for deleting a product here.
    console.log("Deleted Product ID:", productId);
    setProducts(products.filter((product) => product.product_id !== productId));
  };

  return (
    <Box sx={{ p: { xs: 2, md: 4 } }}>
      <TitledBox title="Products" />
      <Box sx={{ textAlign: "right", my: 2 }}>
        <Button
          variant="contained"
          color="primary"
          onClick={() => setNewProductDialogOpen(true)}
        >
          Add Product
        </Button>
      </Box>
      <ProductsTable
        products={products}
        onEditProduct={editProduct}
        onDeleteProduct={deleteProduct}
      />
      <NewProductDialog
        open={newProductDialogOpen}
        onClose={() => setNewProductDialogOpen(false)}
        onCreate={createProduct}
      />
    </Box>
  );
};

export default AdminProducts;
