import React, { useState, useEffect } from "react";
import { Box, Button } from "@mui/material";
import TitledBox from "../../Standard_components/TitledBox";
import ProductsTable from "./ProductsTable";
import NewProductDialog from "./NewProductDialog";
import axios from "axios";
import useFetch from "../../../hooks/useFetch";
import Loading from "../../Standard_components/Loading";
import { useAuthHeaders } from "../../../hooks/useAuthHeaders";

/**
 *
 * The AdminProducts component is a React functional component used for displaying
 * all the products in the database. The products can be viewed,added, edited or deleted.
 * @returns {JSX.Element} The JSX code for the AdminProducts component.
 */
const AdminProducts = () => {
  const [newProductDialogOpen, setNewProductDialogOpen] = useState(false);
  const { headers } = useAuthHeaders();

  const {
    data: products,
    isLoading,
    error: fetchError,
    refetch,
  } = useFetch("GET", "products", headers);

  const {
    isLoading: isCreating,
    error: createError,
    refetch: createProductRequest,
  } = useFetch("POST", "products", headers, null, null, false);

  const {
    isLoading: isDeleting,
    error: deleteError,
    refetch: deleteProductRequest,
  } = useFetch("DELETE", "products", headers, null, null, false);

  const createProduct = async (newProduct) => {
    try {
      const productData = {
        ...newProduct,
        category: { name: newProduct.category_name },
      };
      delete productData.category_name;

      await createProductRequest(productData);
      setNewProductDialogOpen(false);
      await refetch();
    } catch (error) {
      console.error(error);
    }
  };

  const editProduct = (product) => {
    // Add the API call for updating a product here.
    console.log("Edited Product:", product);
  };

  const deleteProduct = async (productId) => {
    try {
      await deleteProductRequest({ id: productId });
      await refetch();
    } catch (error) {
      console.error(error);
    }
  };

  if (isLoading) return <Loading />;

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
        isCreating={isCreating}
        createError={createError}
      />
    </Box>
  );
};

export default AdminProducts;
