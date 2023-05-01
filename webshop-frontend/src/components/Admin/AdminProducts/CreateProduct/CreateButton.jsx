import { Button, CircularProgress } from "@mui/material";
import React from "react";

/**
 * CreateButton is a React functional component that renders a button to create
 * a new product. The button is disabled if any required product field is empty,
 * or if the product is currently being created. When the button is clicked, it
 * triggers the onClick function passed as a prop.
 *
 * @component
 * @param {Object} props - The properties passed to the component.
 * @param {function} props.onClick - Function to handle the button click event.
 * @param {Object} props.product - The product object containing product details.
 * @param {boolean} props.isCreating - A flag indicating if the product is being created.
 * @returns {JSX.Element} The JSX code for the CreateButton component.
 */
const CreateButton = ({ onClick, product, isCreating }) => {
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
      aria-label="Create product"
    >
      {isCreating ? <CircularProgress size={24} /> : "Create Product"}
    </Button>
  );
};

export default CreateButton;
