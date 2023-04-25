import { Button, CircularProgress } from "@mui/material";
import React from "react";

const CreateButton = ({name, onClick, product, isCreating}) => {
  return (
    <Button
      variant="contained"
      color="primary"
      onClick={onClick}
      disabled={
        !product.name ||
        !product.price ||
        !product.description ||
        !product.product_image ||
        !product.imageAlt ||
        !product.qty_in_stock ||
        !product.category_name ||
        isCreating
      }
    >
      {isCreating ? <CircularProgress size={24} /> : "Create Product"}
    </Button>
  );
};

export default CreateButton;