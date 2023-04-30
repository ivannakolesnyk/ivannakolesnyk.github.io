import React from "react";
import Typography from "@mui/material/Typography";
import { Box, Grid } from "@mui/material";
import Button from "@mui/material/Button";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import ProductQuantityController from "./ProductQuantityController";

/**

 ProductInfo component displays the information of a specific product.
 @param {Object} props - Component props
 @param {Object} props.product - Product object containing product information
 @param {number} props.quantity - Quantity of the product to be added to the cart
 @param {Function} props.handleAddToCart - Function to handle adding the product to the cart
 */
function ProductInfo({ product, quantity, setQuantity, handleAddToCart }) {
  return (
    <Grid
      item
      xs={12}
      sm={6}
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        color: "secondary.main",
      }}
    >
      <Typography variant="h4" gutterBottom>
        {product.name}
      </Typography>
      <Typography variant="h6" gutterBottom>
        {`${product.price} NOK`}
      </Typography>
      <Typography variant="body1" paragraph>
        {product.description}
      </Typography>
      {product.ingredients.length !== 0 && (
        <Grid container alignItems="center" mb={"3.2rem"}>
          <Grid item>
            <Typography variant="body1">Ingredients:</Typography>
          </Grid>
          <Grid item>
            <Typography variant="body2" sx={{ marginLeft: 1 }}>
              {product.ingredients}
            </Typography>
          </Grid>
        </Grid>
      )}
      <Box sx={{ display: "flex", gap: "2rem" }}>
        <ProductQuantityController
          quantity={quantity}
          setQuantity={setQuantity}
        />
        <Button
          variant="contained"
          color="primary"
          startIcon={<ShoppingCartIcon />}
          onClick={handleAddToCart}
        >
          Add to cart
        </Button>
      </Box>
    </Grid>
  );
}

export default ProductInfo;
